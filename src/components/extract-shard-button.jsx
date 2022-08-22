import React from 'react';
import {
  useContractWrite,
  usePrepareContractWrite,
  // useContractRead,
} from 'wagmi';
import WaystoneContract from '../contracts/WaystoneDevContract.json';

export default function ExtractShardButton(props) {
  // const { config, error } = usePrepareContractWrite({
  //   addressOrName: '0x163f5496150e9539FB608cBE0130DD1778EdeC20',
  //   contractInterface: WaystoneContract,
  //   functionName: 'allowlistMint',
  //   args: [
  //     [
  //       '0xfa820a421a73532a4f7f1b072c73674692fe3d1d758a3320bdf06aad2d2a3af8',
  //       '0x89461e4537c6a022510184bb3c82022c1e1402f474cd217c0a98d586977b16cf',
  //     ],
  //   ], // merkel tree api
  // });
  // const { write } = useContractWrite(config);

  return (
    <>
      {/* <button
        disabled={!write}
        onClick={() => write?.()}
        className="extract-shard-link"
      >
        <img alt="Link to extract shard" src="/assets/buttons/shard.png" />
      </button>
      {error && (
        <div>An error occurred preparing the transaction: {error.message}</div>
      )} */}
    </>
  );
}
