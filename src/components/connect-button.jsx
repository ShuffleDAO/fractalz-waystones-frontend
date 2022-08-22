import React from "react";
import { useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected'; 
import getMerkleProofs from '../utils/getMerkleProofs';

export default function ConnectButton(props) {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })

  const connectWallet = async () => {
    await connect();
    await getMerkleProofs(address);
  }

  return (
    <button className="connect-btn" onClick={async () => await connectWallet()}>
      <img className="connect-link" alt="Link to ETC Wallet" src="/assets/buttons/connect.png" />
    </button>
  )
}