'use client'
import React from 'react';
import { Button } from 'antd';
import { BaseError } from 'viem'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react';

export default function Page() {

    const { connector, isConnected } = useAccount()
    const { connect, connectors, error, isLoading, pendingConnector } =
      useConnect()
    const { disconnect } = useDisconnect()
    const { open, close } = useWeb3Modal()

    return (
        <div>
            <div>
                {isConnected && (
                <button onClick={() => disconnect()}>
                    Disconnect from {connector?.name}
                </button>
                )}

                {connectors
                .filter((x) => x.ready && x.id !== connector?.id)
                .map((x) => (
                    <button key={x.id} onClick={() => connect({ connector: x })}>
                    {x.name}
                    {isLoading && x.id === pendingConnector?.id && ' (connecting)'}
                    </button>
                ))}


                <Button onClick={() => open({ view: 'Connect' })}>连接钱包</Button>
            </div>

            {error && <div>{(error as BaseError).shortMessage}</div>}
            <Button type="primary">CHALLENGE</Button>
        </div>
    )
}