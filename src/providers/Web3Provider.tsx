import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'
import { ExternalProvider, JsonRpcFetchFunc } from '@ethersproject/providers'
import { Keepalive } from '../components/Keepalive'
import { DEFAULT_CONFIG } from '../constants/default'
import { GlobalContext } from '../contexts'
import { generateConnectors } from '../connectors'
import { ConfigInterface } from '../models'

const getLibrary = (
  provider: ExternalProvider | JsonRpcFetchFunc
): ethers.providers.Web3Provider => {
  const library = new ethers.providers.Web3Provider(provider, 'any')
  library.pollingInterval = 15000
  return library
}

interface Web3ProviderArgs {
  config?: ConfigInterface
  children: JSX.Element
}

export const Web3Provider = ({ children, config }: Web3ProviderArgs) => {
  const mergedConfig = { ...DEFAULT_CONFIG, ...config }

  const connectors = generateConnectors(mergedConfig)

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <GlobalContext.Provider
        value={{
          ...mergedConfig,
          connectors
        }}
      >
        <Keepalive>{children}</Keepalive>
      </GlobalContext.Provider>
    </Web3ReactProvider>
  )
}
