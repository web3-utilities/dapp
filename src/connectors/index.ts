import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { Connectors } from '../models/interface'
import { ConfigContext } from '../models'

export const generateConnectors = (config: ConfigContext): Connectors => {
  const injectedConnector = new InjectedConnector({
    supportedChainIds: config.supportedChainIDs
  })

  const walletConnector = new WalletConnectConnector({
    rpc: {
      1: 'https://mainnet.infura.io/v3/2543dbcf4d8c4ed29a8cf6a159f2700e'
    },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true
  })

  const walletLinkConnector = new WalletLinkConnector({
    url: 'https://mainnet.infura.io/v3/2543dbcf4d8c4ed29a8cf6a159f2700e',
    appName: config.walletLinkAppName,
    appLogoUrl: config.walletLinkLogoUrl
  })

  return {
    injectedConnector,
    walletConnector,
    walletLinkConnector
  }
}
