import React from 'react'
import {Web3ReactProvider} from '@web3-react/core'
import {ethers} from 'ethers'
import {ExternalProvider, JsonRpcFetchFunc} from '@ethersproject/providers'
import {Keepalive} from '../components/Keepalive'
import {ConfigContext} from '../models'
import {DEFAULT_CONFIG} from '../constants/default'
import { Context } from '../contexts'

const getLibrary = (
  provider: ExternalProvider | JsonRpcFetchFunc
): ethers.providers.Web3Provider => {
  const library = new ethers.providers.Web3Provider(provider, 'any')
  library.pollingInterval = 15000
  return library
}


interface Web3ProviderArgs {
  config?: ConfigContext
  children: JSX.Element
}

export const Web3Provider = ({ children, config }: Web3ProviderArgs) => {
  const mergedConfig = {...DEFAULT_CONFIG, ...config}

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Context.Provider value={mergedConfig}>
        <Keepalive>{children}</Keepalive>
      </Context.Provider>
    </Web3ReactProvider>
  )
}
