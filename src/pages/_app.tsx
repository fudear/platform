import Root from '@/components/layout/Root';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';

export default function App({ Component, pageProps }: AppProps) {
  const APP_TITLE = 'CleanHelp';
  const APP_DESCRIPTION = 'Transparencia y trazabilidad';

  const chains = [arbitrum, mainnet, polygon];
  const projectId = '94c9ca4d9e245b62aa5187af55682815';

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: false,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <RecoilRoot>
        <WagmiConfig config={wagmiConfig}>
          <Root Component={Component} pageProps={pageProps} />
          <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </WagmiConfig>
      </RecoilRoot>
    </>
  );
}
