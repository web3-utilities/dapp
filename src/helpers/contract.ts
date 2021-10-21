import { Contract, ethers, ContractInterface } from 'ethers'
import { isAddress } from 'ethers/lib/utils'

export function getContract(
  library: ethers.providers.JsonRpcProvider,
  address: string,
  abi: ContractInterface,
  account?: string | null | undefined
): Contract | null {
  if (!isAddress(address) || address === ethers.constants.AddressZero) {
    return null
  }

  return new Contract(
    address,
    abi,
    account ? library.getSigner(account).connectUnchecked() : library
  )
}
