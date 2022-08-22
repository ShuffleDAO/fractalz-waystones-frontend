import axios from "axios";

export default async function getMerkleProofs(address) {
  const data = await axios.post('https://vercel-api-theta.vercel.app/api/proof', {address});
  console.log("hi", data);
}