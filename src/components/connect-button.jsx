import React from "react";
import { useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected'; 
// import getMerkleProofs from '../utils/getMerkleProofs';

export default function ConnectButton(props) {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })

  console.log(isConnected)
  const connectWallet = () => {
    console.log('connect to me');
    connect();
  }

  return (
    <button className="connect-btn" onClick={() => connectWallet()}>
      <img className="connect-link" alt="Link to ETC Wallet" src="/assets/buttons/connect.png" />
    </button>
  )
}