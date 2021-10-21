import { Contract } from 'ethers'

export interface MulticallCall {
  contract: Contract | null
  method: string
  args?: any[]
}
