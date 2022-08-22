import React from "react";
import { useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected'; 
// import getMerkleProofs from '../utils/getMerkleProofs';

export default function ConnectButton(props) {
  // const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })

  return (
    <button className="connect-btn" onClick={() => connect()}>
      <img className="connect-link" alt="Link to ETC Wallet" src="/assets/buttons/connect.png" />
    </button>
  )
}