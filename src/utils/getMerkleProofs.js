import axios from 'axios';

export default async function getMerkleProofs(address) {
  const data = await axios.post(
    'https://vercel-api-theta.vercel.app/api/proof',
    { address },
    {
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': false,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    }
  );
  console.log('hi', data);

  return data;
}
