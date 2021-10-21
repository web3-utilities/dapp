import { useEffect, useState } from 'react'
import { useWeb3 } from './useWeb3'

export const useENSName = (account: string) => {
  const { library } = useWeb3()
  const [result, setResult] = useState(account)

  useEffect(() => {
    if (!library) return
    const look = async () => {
      const r = await library.lookupAddress(account)
      setResult(r.toString())
    }

    look().catch((e) => console.error(e))
  }, [library, account])

  return result
}
