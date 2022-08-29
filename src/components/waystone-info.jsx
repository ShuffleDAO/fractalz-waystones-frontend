import React from 'react';
import { useContractRead, useNetwork } from 'wagmi';

import WaystoneContract from '../contracts/WaystoneDevContract.json'; // TODO: Replace with Waystone contract info

import { WAYSTONE_CONTRACT_ADDRESS } from '../utils/constants'; // TODO: Replace with Waystone contract info

export default function WaystoneInfo() {
  const { chain } = useNetwork();
  const contractAddress = WAYSTONE_CONTRACT_ADDRESS[chain?.id];

  const { status, data, error } = useContractRead({
    addressOrName: contractAddress, // Waystone contract address
    contractInterface: WaystoneContract,
    functionName: 'minted',
    watch: true,
  });

  const totalShards = data && 1200 - parseInt(data._hex, 16);

  return (
    <>
      {status !== 'loading' && (
        <div className="extract-link-text">
          {error || !data
            ? '5 per wallet | X / ????'
            : `5 per wallet | ${totalShards.toLocaleString()} of 1,200 remaining`}
        </div>
      )}
    </>
  );
}
