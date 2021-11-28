import React, { useEffect, useMemo } from 'react'
import { Box, Button } from '@mui/material'
import { injectedConnector } from './connectors'
import {
  displayBalance,
  ellipseAddress,
  MulticallCall,
  useBalance,
  useMulticall,
  useENSName,
  useContract
} from '@w3u/useWeb3'
import ERC20ABI from './abis/ERC20.json'

const App = () => {
  const { library, account, activate } = useDApp()
  const ensName = useENSName(account ?? '')
  const connect = () => activate(injectedConnector, (e) => console.error(e), true)
  const balance = useBalance()
  const usdtContract = useContract('0xdac17f958d2ee523a2206206994597c13d831ec7', ERC20ABI.abi)
  const daiContract = useContract('0x6b175474e89094c44da98b954eedeac495271d0f', ERC20ABI.abi)
  const calls = useMemo<MulticallCall[]>(() => {
    return [
      { contract: usdtContract, method: 'balanceOf', args: [account] },
      { contract: daiContract, method: 'balanceOf', args: [account] }
    ]
  }, [usdtContract, daiContract, account])

  useEffect(() => {
    if (!library) return
    library.on('block', (blockNumber: number) => {
      console.log(blockNumber)
    })

    return () => {
      console.log('remove')
      library.removeListener('block')
    }
  }, [library])

  const results = useMulticall(calls)

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {account ? (
        <Box>
          {ellipseAddress(ensName)}
          <Box>{displayBalance(balance, 18, 4)}</Box>
          <Box>
            {results?.map((result, i) => {
              return <Box key={`key-${i}`}>{displayBalance(result)}</Box>
            })}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            borderRadius: 16
          }}
        >
          <Box sx={{ bgcolor: '#fff', py: 6, px: 10, textAlign: 'center' }}>
            <Box mb={2}>
              <img
                src='https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg'
                alt='Metamask'
                width={128}
              />
            </Box>
            <Button onClick={connect} variant='text'>
              Unlock Wallet
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default App
