import { useEffect, useState } from 'react'
import { useWeb3 } from './useWeb3'

export const useBlockNumber = () => {
  const { library } = useWeb3()

  const [number, setNumber] = useState(0)

  useEffect(() => {
    if (!library) return
    library.on('block', (blockNumber: number) => {
      setNumber(blockNumber)
    })

    return () => library.removeListener('block')
  }, [library])

  return number
}
