import { useWeb3React } from '@web3-react/core'
import { useContext } from 'react'
import { Context } from '../contexts'
import { Web3ContextInterface } from '../models/interface'
import { generateConnectors } from '../connectors'

export const useWeb3 = (): Web3ContextInterface => {
  const config = useContext(Context)
  if (config === null) {
    throw new Error('Please wrap your app with <Web3Provider />')
  }

  const result = useWeb3React()

  const connectors = generateConnectors(config)

  return {
    ...result,
    connectors
  }
}
