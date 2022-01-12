import { CHAIN_ETHER } from '@w3u/chains'
import { Token } from '../models'

export const TOKEN_ADDRESSES: Token[] = [
  {
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    symbol: 'USDT',
    decimals: 6,
    chainID: CHAIN_ETHER
  },
  {
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    symbol: 'USDC',
    decimals: 6,
    chainID: CHAIN_ETHER
  },
  {
    address: '0x6b175474e89094c44da98b954eedeac495271d0f',
    symbol: 'DAI',
    decimals: 6,
    chainID: CHAIN_ETHER
  }
]
