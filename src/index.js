import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiConfig, createClient, chain, configureChains } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';

import Main from './Main';
import WaystonePage from './routes/waystone-page';
import FractalzPage from './routes/fractalz-page';
import './index.css';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.rinkeby],
  [
    // TODO: Move to .env
    alchemyProvider({ apiKey: 'gv2-JHsuB0A3KHKMn2Nur5rJ1o57dhKc' }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Fractalz',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains} theme={midnightTheme()}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/waystones" element={<WaystonePage />} />
          <Route path="/mint" element={<FractalzPage />} />
        </Routes>
      </BrowserRouter>
    </RainbowKitProvider>
  </WagmiConfig>
);
