import { BigNumberish, ethers } from 'ethers'
import BigNumber from 'bignumber.js'

export const ellipseAddress = (address: string | null | undefined, width = 4): string => {
  if (!address) return ''

  if (!ethers.utils.isAddress(address)) return address

  if (width <= 0) {
    return address
  }

  const prefixWith = address.slice(0, 2) === '0x' ? width + 2 : width

  return `${address.slice(0, prefixWith)}...${address.slice(-width)}`
}

export const displayBalance = (
  balance: BigNumberish | undefined,
  decimals = 18,
  fixed = 2
): string => {
  if (!balance) balance = 0
  let bn
  try {
    bn = new BigNumber(balance.toString())
  } catch (e) {
    bn = new BigNumber(0)
  }

  if (bn.div(10 ** decimals).gt(1000)) fixed = 0

  return bn.div(10 ** decimals).toFormat(fixed, BigNumber.ROUND_DOWN)
}
