"use client";

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "a9f8856bf87d913f7af93c2a3e5ebb15";

// 2. Create wagmiConfig
const metadata = {
    name: 'DeCert.Me',
    description: 'Decentralized skills learning and certification platform · Education in the Age of AI · SBT - Proof of Learn.',
    url: 'https://decert.me',
    icons: ['https://decert.me/favicon.ico']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

export function Web3Modal({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}