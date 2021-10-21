import { CHAIN_ARBITRUM, CHAIN_BSC, CHAIN_ETHER, CHAIN_ETHER_KOVAN } from '@w3u/chains'
import { InjectedConnector } from '@web3-react/injected-connector'

export const defaultSupportedChainIDs = [CHAIN_ETHER, CHAIN_ETHER_KOVAN, CHAIN_BSC, CHAIN_ARBITRUM]

export const getInjectedConnector = (chainIDs: number[] = defaultSupportedChainIDs) => {
  return new InjectedConnector({
    supportedChainIds: chainIDs
  })
}
