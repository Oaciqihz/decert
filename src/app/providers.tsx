'use client'

import * as React from 'react'
import { WagmiConfig } from 'wagmi'
import { config } from '../wagmi'
import StyledComponentsRegistry from '../lib/AntdRegistry';

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    // wagmi
    <WagmiConfig config={config}>
        {/* antd */}
        <StyledComponentsRegistry>
            {mounted && children}
        </StyledComponentsRegistry>
    </WagmiConfig>
  )
}