import React from 'react';
import { useContractRead, useNetwork } from 'wagmi';

import WaystoneContract from '../contracts/WaystoneDevContract.json';
import { WAYSTONE_CONTRACT_ADDRESS } from '../utils/constants';

export default function ShardsInfo() {
  const { chain } = useNetwork();
  const contractAddress = WAYSTONE_CONTRACT_ADDRESS[chain?.id];

  const { status, data, error } = useContractRead({
    addressOrName: contractAddress,
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
            ? '1 per wallet | 1,200 total'
            : `1 per wallet | ${totalShards.toLocaleString()} of 1,200 remaining`}
        </div>
      )}
    </>
  );
}
