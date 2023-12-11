import { polygonMumbai } from 'viem/chains'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { publicProvider } from 'wagmi/providers/public'

export default function Wagmi({children}:{children: React.ReactNode}) {

  const projectId = "a9f8856bf87d913f7af93c2a3e5ebb15";

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [polygonMumbai],
    [publicProvider(),]
  )

  const wagmiClient = createConfig({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains }),
      new WalletConnectConnector({
        chains,
        options: {
          projectId: projectId,
          showQrModal: true
        },
      }),
    ],
    publicClient,
    webSocketPublicClient,
  })

  return (
    <WagmiConfig config={wagmiClient}>
      {children}
    </WagmiConfig>
  )
}