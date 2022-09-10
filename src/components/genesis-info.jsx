import React from 'react';
import { useContractRead, useNetwork } from 'wagmi';

import GenesisContract from '../contracts/GenesisDevContract.json';
import { GENESIS_CONTRACT_ADDRESS } from '../utils/constants';

export default function ShardsInfo() {
  const { chain } = useNetwork();
  const contractAddress = GENESIS_CONTRACT_ADDRESS[chain?.id];

  console.log(contractAddress)

  const { status, data, error } = useContractRead({
    addressOrName: contractAddress,
    contractInterface: GenesisContract,
    functionName: 'totalSupply',
    watch: true,
  });

  const { secondsLeftStatus, secondsLeftData, secondsLeftError } = useContractRead({
    addressOrName: contractAddress,
    contractInterface: GenesisContract,
    functionName: 'secondsUntilClose',
    watch: true,
  });

  const totalFractalz = data && parseInt(data._hex, 16);

  const secondsUntilClose = secondsLeftData && parseInt(secondsLeftData._hex, 16);

  return (
    <>
      {status !== 'loading' && (
        <div className="extract-link-text" style={{padding: 0, textAlign: "center"}}>
          {error || !data
            ? 'Emerged Fractalz: (Connect Wallet)'
            : `Emerged Fractalz: ${totalFractalz.toLocaleString()}`}
        </div>
      )}
      {secondsLeftStatus !== 'loading' && (
          <div className="extract-link-text" style={{padding: '10px 0 0 0', textAlign: "center"}}>
            {secondsLeftError || !secondsLeftData
                ? 'Est. Portal Closing: ??:??:??'
                : `Est. Portal Closing: ${secondsUntilClose}`}
          </div>
      )}
    </>
  );
}
