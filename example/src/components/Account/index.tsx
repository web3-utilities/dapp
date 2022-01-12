import React from 'react'
import { Box } from '@mui/material'
import { useWeb3, ellipseAddress, useBalance, displayBalance, useENSName } from '@w3u/useWeb3'
import { CHAIN_ETHER, Chains } from '@w3u/chains'

const Account = () => {
  const { account, chainId } = useWeb3()
  const balance = useBalance()
  const ensName = useENSName(account ?? '')

  return (
    <Box
      sx={{
        borderRadius: '8px',
        background: '#fff',
        p: '10px 15px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px'
      }}
    >
      {displayBalance(balance)}&nbsp;
      <Box mr={2}>{Chains[chainId || CHAIN_ETHER].symbol}</Box>
      {ellipseAddress(ensName)}
    </Box>
  )
}

export default Account
