import React, { createContext } from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'
import { ExternalProvider, JsonRpcFetchFunc } from '@ethersproject/providers'
import { Keepalive } from '../components/Keepalive'

const getLibrary = (
  provider: ExternalProvider | JsonRpcFetchFunc
): ethers.providers.Web3Provider => {
  const library = new ethers.providers.Web3Provider(provider, 'any')
  library.pollingInterval = 15000
  return library
}

export interface ConfigContext {
  supportedChainIDs: number[]
}

export const Context = createContext<ConfigContext>({supportedChainIDs: [1]})

interface Web3ProviderArgs {
  config?: ConfigContext
  children: JSX.Element
}

export const Web3Provider = ({children }: Web3ProviderArgs) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
        <Keepalive>{children}</Keepalive>
    </Web3ReactProvider>
  )
}
