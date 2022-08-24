const { MerkleTree } = require('merkletreejs');
const addresses = require('./src/utils/merkleAddresses.json');
const ethers = require('ethers')
const { keccak256 } = ethers.utils;

const hashedAddresses = addresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(hashedAddresses, keccak256, { sortPairs: true });
const rootHash = merkleTree.getRoot().toString('hex');

console.log('0x' + rootHash)