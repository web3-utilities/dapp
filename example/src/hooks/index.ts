import { useMemo } from 'react'
import { TOKEN_ADDRESSES } from '../constants'
import { Token } from '../models'

export const useTokens = (chainID: number | undefined): Token[] => {
  return useMemo(() => TOKEN_ADDRESSES.filter((token) => token.chainID === chainID), [chainID])
}
