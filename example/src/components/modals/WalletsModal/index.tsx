import { Box, Dialog, DialogProps, Typography } from '@mui/material'
import React from 'react'
import { useWeb3 } from '@w3u/useWeb3'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const WalletItem = ({
  active,
  name,
  logo,
  connect
}: {
  active: boolean
  name: string
  logo: string
  connect: () => void
}) => {
  return (
    <Box
      sx={{
        borderRadius: '12px',
        border: '1px solid #f0f0f0',
        p: '10px 15px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderColor: active ? 'primary.main' : '#f0f0f0',
        '&:hover': {
          borderColor: 'primary.main'
        },
        '&:not(:last-child)': {
          mb: 3
        },
        svg: {
          fontSize: '12px',
          marginRight: '5px'
        }
      }}
      onClick={connect}
    >
      {active && <FiberManualRecordIcon color='primary' />}
      {name}
      <Box ml='auto'>
        <img src={logo} width={26} alt='metamask' />
      </Box>
    </Box>
  )
}

const WalletsModal = ({ ...props }: DialogProps) => {
  const { activate, connectors, connector } = useWeb3()
  const connect = () => activate(connectors.injectedConnector, (e) => console.error(e), true)

  console.log(connector === connectors.injectedConnector)
  console.log(connector)
  console.log(connectors.injectedConnector)
  return (
    <>
      <Dialog {...props}>
        <Box p={6}>
          <Typography variant='h6' mb={3}>
            Connect Wallet
          </Typography>
          <WalletItem
            active={connector === connectors.injectedConnector}
            connect={connect}
            name='MetaMask'
            logo='https://raw.githubusercontent.com/web3-utilities/assets/main/wallets/metamask.svg'
          />
          <WalletItem
            active={connector === connectors.walletConnector}
            connect={connect}
            name='WalletConnect'
            logo='https://raw.githubusercontent.com/web3-utilities/assets/main/wallets/wallet_connect.svg'
          />
          <WalletItem
            active={connector === connectors.walletLinkConnector}
            connect={connect}
            name='Coinbase Wallet'
            logo='https://raw.githubusercontent.com/web3-utilities/assets/main/wallets/coinbase.svg'
          />
        </Box>
      </Dialog>
    </>
  )
}

export default WalletsModal
