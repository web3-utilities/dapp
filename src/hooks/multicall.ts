import { Contract } from 'ethers'
import { useWeb3 } from './useWeb3'
import { useContract } from './contract'
import { MULTICALL_ADDRESSES } from '../constants/multicall'
import MULTICALL_ABI from '../abis/Multicall.json'
import { MulticallCall } from '../interfaces/contract'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useBlockNumber } from './helper'

export const useMulticallContract = (): Contract | null => {
  const { chainId } = useWeb3()
  return useContract(chainId && MULTICALL_ADDRESSES[chainId], MULTICALL_ABI)
}

export const useMulticall = (calls: MulticallCall[]) => {
  const multicallContract = useMulticallContract()
  const [result, setResult] = useState<any[]>()
  const number = useBlockNumber()

  const inputs = useMemo(
    () =>
      calls && calls.length > 0
        ? calls.map((call: MulticallCall) => {
            const contract = call.contract
            try {
              return {
                target: contract?.address,
                callData: contract?.interface?.encodeFunctionData(call.method, call.args)
              }
            } catch (e) {
              return null
            }
          })
        : [],
    [calls]
  )

  const handle = useCallback(async () => {
    if (!multicallContract) return
    const result = await multicallContract.aggregate(inputs)
    const r = calls.map((call, i) =>
      call.contract?.interface.decodeFunctionResult(call.method, result.returnData[i])
    )
    setResult(r)
  }, [multicallContract, inputs, number])

  useEffect(() => {
    handle().catch((e) => console.error(e))
  }, [multicallContract, inputs])

  return result
}
