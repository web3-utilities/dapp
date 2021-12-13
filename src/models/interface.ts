import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'

export interface Connectors {
  injectedConnector: InjectedConnector
  walletConnector: WalletConnectConnector
  walletLinkConnector: WalletLinkConnector
}

export interface Web3ContextInterface extends Web3ReactContextInterface {
  connectors: Connectors
}
