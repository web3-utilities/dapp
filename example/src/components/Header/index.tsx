import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import { useModal } from 'mui-modal-provider'
import WalletsModal from '../modals/WalletsModal'
import { useWeb3 } from '@w3u/useWeb3'
import Account from '../Account'

const Header = () => {
  const { account } = useWeb3()
  const { showModal } = useModal()

  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          display: 'flex',
          height: '66px',
          alignItems: 'center'
        }}
      >
        <Box display='flex' alignItems='center'>
          <img
            src='https://docs.soliditylang.org/en/v0.8.11/_static/logo.svg'
            alt='logo'
            width={48}
          />
          <Typography variant='h6'>useWeb3</Typography>
        </Box>
        <Box ml='auto'>
          {!account && (
            <Button variant='text' size='medium' onClick={() => showModal(WalletsModal)}>
              Connect Wallet
            </Button>
          )}
          {account && <Account />}
        </Box>
      </Box>
    </Container>
  )
}
export default Header
