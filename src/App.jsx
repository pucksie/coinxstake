import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import StatisticsSection from "./Components/StatisticsSection/StatisticsSection";
import "./App.css";
import Faq from "./Components/Faq/Faq";



import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  bsc,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, bsc, zora],
  [
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'd3873ed18b4ac26cf6f5dffdb2fe9cbd',
  chains
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

function App() {
  return (
    <>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>


      <Navbar />
      <Header />
      <StatisticsSection />


      <Faq />
      </RainbowKitProvider>
    </WagmiConfig>
    </>
  );
}

export default App;
