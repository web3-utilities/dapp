import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './themes/style'
import { Web3Provider } from '@w3u/useWeb3'

ReactDOM.render(
  <React.StrictMode>
    <Web3Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Web3Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
