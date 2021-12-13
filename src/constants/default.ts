import { CHAIN_ETHER } from '@w3u/chains'
import { ConfigContext } from '../models'

export const DEFAULT_CONFIG: ConfigContext = {
  supportedChainIDs: [CHAIN_ETHER],
  walletLinkAppName: 'UseWeb3',
  walletLinkLogoUrl: ''
}
