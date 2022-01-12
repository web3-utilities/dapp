import React, { useMemo } from 'react'
import { Box, Button, CircularProgress } from '@mui/material'
import { displayBalance, useBlockNumber, useTokenBalances, useWeb3 } from '@w3u/useWeb3'
import Header from './components/Header'
import { useTokens } from './hooks'
import { getIcon } from './helpers'
import { TokenWithName } from './components/style'
import Footer from './components/Footer'

const App = () => {
  const { account, activate, connectors, chainId } = useWeb3()
  const connect = () => activate(connectors.injectedConnector, (e) => console.error(e), true)
  // const disconnect = () => deactivate()

  const tokens = useTokens(chainId)
  const tokenAddresses = useMemo(() => tokens.map((token) => token.address), [tokens])

  const balances = useTokenBalances(tokenAddresses, account)

  const blockNumber = useBlockNumber()
  console.log(blockNumber)

  return (
    <Box>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          width: '200vw',
          height: '200vh',
          background: 'radial-gradient(50% 50% at 50% 50%,#fc077d10 0,rgba(255,255,255,0) 100%)',
          zIndex: -1,
          transform: 'translate(-50vw, -100vh)'
        }}
      />
      <Header />
      <Box
        sx={{
          minHeight: 'calc(100vh - 122px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            borderRadius: '12px',
            background: '#fff',
            p: 4,
            width: '460px',
            maxWidth: '100%'
          }}
        >
          {account ? (
            <Box>
              <Box textAlign='center'>{!balances && <CircularProgress size={20} />}</Box>
              {balances?.map((balance, i) => {
                return (
                  <Box
                    key={`key-${i}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      '&:not(:last-child)': {
                        mb: 4
                      }
                    }}
                  >
                    <TokenWithName
                      src={getIcon(tokens[i].symbol)}
                      name={tokens[i].symbol}
                      width={20}
                    />
                    <Box ml='auto'>{displayBalance(balance, tokens[i].decimals)}</Box>
                  </Box>
                )
              })}
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
      </Box>
      <Footer />
    </Box>
  )
}

export default App
