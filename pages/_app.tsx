import '../styles/globals.css'
import type { AppProps } from 'next/app'

import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultWallets, midnightTheme,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
    chain,
    configureChains,
    createClient,
    WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {AnimatePresence} from "framer-motion";
import {useRouter} from "next/router";

const { chains, provider } = configureChains(
    [chain.mainnet],
    [
        alchemyProvider({ apiKey: 'gv2-JHsuB0A3KHKMn2Nur5rJ1o57dhKc' }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'Fractalz',
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})

function FractalzApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
  return (
      <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} theme={midnightTheme()}>
              <AnimatePresence
                  exitBeforeEnter
                  initial={false}
              >
                  <Component {...pageProps} key={router.pathname}/>
              </AnimatePresence>
          </RainbowKitProvider>
      </WagmiConfig>
  )
}

export default FractalzApp
