import { MerkleTree } from 'merkletreejs';
import { ethers } from 'ethers';

import addresses from './merkleAddresses.json';

const { keccak256 } = ethers.utils;

const hashedAddresses = addresses.map((addr) => keccak256(addr));

export default function generateMerkleProof(
  address = ethers.constants.AddressZero
) {
  const hashedAddress = keccak256(address);
  const merkleTree = new MerkleTree(hashedAddresses, keccak256, {
    sortPairs: true,
    duplicateOdd: true,
  });
  const proof = merkleTree.getHexProof(hashedAddress);

  return proof;
}
