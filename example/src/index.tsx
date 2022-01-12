import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './themes/style'
import { Web3Provider } from '@w3u/useWeb3'
import { CHAIN_BSC, CHAIN_ETHER } from '@w3u/chains'
import ModalProvider from 'mui-modal-provider'

ReactDOM.render(
  <React.StrictMode>
    <Web3Provider
      config={{
        supportedChainIDs: [CHAIN_ETHER, CHAIN_BSC, 1284]
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ModalProvider>
          <App />
        </ModalProvider>
      </ThemeProvider>
    </Web3Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
