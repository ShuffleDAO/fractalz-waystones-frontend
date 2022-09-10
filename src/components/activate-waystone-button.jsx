import React, { useState } from 'react';
import {
  usePrepareContractWrite,
  useContractWrite,
  useNetwork,
  useAccount,
} from 'wagmi';

import {GENESIS_CONTRACT_ADDRESS} from '../utils/constants';
import GenesisContract from '../contracts/WaystoneDevContract.json';
import GenesisInfo from "./genesis-info";

const INVALID_PROOF_ERROR = 'execution reverted: Invalid proof';
const EXCEEDS_MINT_ERROR = 'execution reverted: Exceeds mint allocation';
const SALE_NOT_STARTED_ERROR = 'execution reverted: Sale has not started yet.';
const EXCEEDS_MAX_SUPPLY_ERROR = 'execution reverted: Exceeds max supply';
const UNDERLYING_NETWORK_ERROR = 'underlying network changed';

export default function ActiveWaystoneButton(props) {
  const [touched, setTouched] = useState(false);
  const { chain } = useNetwork();
  const { address } = useAccount();
  const contractAddress = GENESIS_CONTRACT_ADDRESS[chain?.id];

  const { config, error } = usePrepareContractWrite({
    addressOrName: contractAddress,
    contractInterface: GenesisContract,
    functionName: 'mint',
  });
  const { write } = useContractWrite(config);

  if (!contractAddress) {
    return <></>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginBottom: 16,
      }}
    >
      <button
        disabled={!address}
        onClick={() => {
          setTouched(true);
          write?.();
        }}
        className="extract-shard-link"
      >
        <img alt="Link to active waystone" src="/assets/buttons/waystone.png" />
      </button>
      {error && error.reason === INVALID_PROOF_ERROR && touched ? (
        <div
          style={{
            color: 'yellow',
          }}
        >
          Your address is not on the holo-records. Please wait for public
          extraction.
        </div>
      ) : null}
      {error && error.reason === EXCEEDS_MINT_ERROR && touched ? (
        <div
          style={{
            color: 'yellow',
          }}
        >
          The holo-records indicate a shard has already been extracted by you.
        </div>
      ) : null}
      {error && error.reason === SALE_NOT_STARTED_ERROR && touched ? (
        <div
          style={{
            color: 'yellow',
          }}
        >
          Extraction is not available yet. Please await further messages.
        </div>
      ) : null}
      {error && error.reason === EXCEEDS_MAX_SUPPLY_ERROR && touched ? (
        <div
          style={{
            color: 'yellow',
          }}
        >
          All shards have been extracted!
        </div>
      ) : null}
      {error && error.reason === UNDERLYING_NETWORK_ERROR && touched ? (
        <div
          style={{
            color: 'yellow',
          }}
        >
          Network error. Please disconnect and reconnect by clicking your
          account.
        </div>
      ) : null}
        <GenesisInfo />
    </div>
  );
}
