export const getIcon = (tokenName: string) => {
  switch (tokenName) {
    case 'USDT':
      return 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png'
    case 'DAI':
      return 'https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png'
    case 'USDC':
      return 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png'
    default:
      return 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png'
  }
}
