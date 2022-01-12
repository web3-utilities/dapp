import { CHAIN_ETHER } from '@w3u/chains'
import { ConfigInterface, GlobalContextInterface } from '../models'
import { generateConnectors } from '../connectors'

export const DEFAULT_CONFIG: ConfigInterface = {
  supportedChainIDs: [CHAIN_ETHER],
  walletLinkAppName: 'useWeb3',
  walletLinkLogoUrl: ''
}

export const DEFAULT_GLOBAL_CONTEXT: GlobalContextInterface = {
  ...DEFAULT_CONFIG,
  connectors: generateConnectors(DEFAULT_CONFIG)
}
