import { useWeb3React } from '@web3-react/core'
import { useContext } from 'react'
import { GlobalContext } from '../contexts'
import { Web3ContextInterface } from '../models/interface'

export const useWeb3 = (): Web3ContextInterface => {
  const { connectors } = useContext(GlobalContext)
  if (!connectors) {
    throw new Error('Please wrap your app with <Web3Provider />')
  }

  const result = useWeb3React()

  return {
    ...result,
    connectors
  }
}
