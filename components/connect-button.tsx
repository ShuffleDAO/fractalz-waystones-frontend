import Image from "next/image";
import { ConnectButton as RainbowConnectButton } from '@rainbow-me/rainbowkit';

export default function ConnectButton() {
    return (
        <div className={"font-['redress'] text-2xl"}>
            <RainbowConnectButton.Custom>
                {({
                      account,
                      chain,
                      openAccountModal,
                      openChainModal,
                      openConnectModal,
                      mounted,
                  }) => {
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
                                            className="text-4xl pb-2"
                                            onClick={openConnectModal}
                                            type="button"
                                            style={{
                                                marginRight: 8,
                                            }}
                                        >
                                            connect
                                        </button>
                                    );
                                }

                                if (chain.unsupported) {
                                    return (
                                        <button
                                            onClick={openChainModal}
                                            type="button"
                                        >
                                            Wrong network
                                        </button>
                                    );
                                }

                                return (
                                    <div className={"flex flex-row items-center gap-x-2"}>
                                        <button className={"flex flex-row items-center"}
                                            onClick={openChainModal}
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
                                                        <Image
                                                            alt={chain.name ?? 'Chain icon'}
                                                            src={chain.iconUrl}
                                                            width={24}
                                                            height={24}
                                                        />
                                                    )}
                                                </div>
                                            )}
                                            <div>
                                                {chain.name}
                                            </div>
                                        </button>
                                        <button
                                            onClick={openAccountModal}
                                            type="button"
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
    )
}
