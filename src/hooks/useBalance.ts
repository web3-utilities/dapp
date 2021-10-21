import { useEffect, useState } from 'react'
import { useWeb3 } from './useWeb3'

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
