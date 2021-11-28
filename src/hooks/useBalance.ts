import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from './useWeb3'
import { MulticallCall } from '../interfaces'
import { getContract } from '../helpers/contract'
import ERC20ABI from '../abis/ERC20.json'
import { useMulticall } from './multicall'

export const useBalance = () => {
  const { library, account } = useWeb3()
  const [balance, setBalance] = useState()

  useEffect(() => {
    if (!library) return
    const get = async () => {
      const result = await library.getBalance(account)
      setBalance(result.toString())
    }
    get().catch((e) => console.error(e))
  }, [library, account])

  return balance
}

export const useTokenBalances = (addresses: string[], account?: string | null | undefined) => {
  const { library } = useWeb3()

  const calls = useMemo((): MulticallCall[] => {
    if (!addresses) return []
    return addresses.map((address) => {
      try {
        const contract = getContract(library, address, ERC20ABI.abi)
        return { contract: contract, method: 'balanceOf', args: [account] }
      } catch (e) {
        console.error(e)
        return { contract: null, method: 'balanceOf', args: [account] }
      }
    })
  }, [addresses, account])

  return useMulticall(calls)
}
