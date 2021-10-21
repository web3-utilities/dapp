import { useWeb3React } from '@web3-react/core'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'

export const useWeb3 = (): Web3ReactContextInterface => useWeb3React()
