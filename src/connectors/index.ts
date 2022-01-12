import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { ConfigInterface, Connectors } from '../models'
import { CHAIN_ETHER } from '@w3u/chains'

export const generateConnectors = (config: ConfigInterface): Connectors => {
  const injectedConnector = new InjectedConnector({
    supportedChainIds: config.supportedChainIDs
  })

  const walletConnector = new WalletConnectConnector({
    rpc: {
      [CHAIN_ETHER]: 'https://mainnet.infura.io/v3/2543dbcf4d8c4ed29a8cf6a159f2700e'
    },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true
  })

  const walletLinkConnector = new WalletLinkConnector({
    url: 'https://mainnet.infura.io/v3/2543dbcf4d8c4ed29a8cf6a159f2700e',
    appName: config.walletLinkAppName || '',
    appLogoUrl: config.walletLinkLogoUrl
  })

  return {
    injectedConnector,
    walletConnector,
    walletLinkConnector
  }
}
