import React from 'react';
import { ConnectButton as RainbowConnectButton } from '@rainbow-me/rainbowkit';

export default function ConnectButton(props) {
  return (
    <div style={{ marginRight: 16 }}>
      <RainbowConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted;
          const connected = ready && account && chain;

          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      className="connect-btn"
                      onClick={openConnectModal}
                      type="button"
                      style={{
                        marginRight: 8,
                      }}
                    >
                      <img
                        className="connect-link"
                        alt="Connect to Wallet"
                        src="/assets/buttons/connect.png"
                      />
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      type="button"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: 'transparent',
                        color: 'white',
                        border: 0,
                        fontSize: 24,
                        fontFamily: 'redress',
                        cursor: 'pointer',
                      }}
                    >
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button
                      onClick={openChainModal}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: 'transparent',
                        color: 'white',
                        border: 0,
                        fontSize: 24,
                        fontFamily: 'redress',
                        cursor: 'pointer',
                      }}
                      type="button"
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 24,
                            height: 24,
                            borderRadius: 999,
                            overflow: 'hidden',
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              style={{ width: 24, height: 24 }}
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                    </button>

                    <button
                      onClick={openAccountModal}
                      type="button"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: 'transparent',
                        color: 'white',
                        border: 0,
                        fontSize: 24,
                        fontFamily: 'redress',
                        cursor: 'pointer',
                      }}
                    >
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ''}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </RainbowConnectButton.Custom>
    </div>
  );
}
