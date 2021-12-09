import { useWeb3React } from '@web3-react/core'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { useContext } from 'react'
import { InjectedConnector } from '@web3-react/injected-connector'
import { Context } from '../contexts'

export interface Web3ContextInterface extends Web3ReactContextInterface {
  injectedConnector: InjectedConnector
}

export const useWeb3 = (): Web3ContextInterface => {
  const config = useContext(Context)
  const result = useWeb3React()
  const injectedConnector = new InjectedConnector({
    supportedChainIds: config.supportedChainIDs
  })

  return {...result, injectedConnector}
}
