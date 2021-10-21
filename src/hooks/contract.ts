import { Contract, ContractInterface } from 'ethers'
import { useWeb3 } from './useWeb3'
import { useMemo } from 'react'
import { getContract } from '../helpers/contract'

export const useContract = (
  address: string | undefined | 0,
  abi: ContractInterface
): Contract | null => {
  const { library, account } = useWeb3()

  return useMemo(() => {
    if (!address || !abi || !library) return null
    return getContract(library, address, abi, account)
  }, [address, abi, library])
}
