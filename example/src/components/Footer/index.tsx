import React from 'react'
import { Box } from '@mui/material'
import { useBlockNumber } from '@w3u/useWeb3'

const Footer = () => {
  const blockNumber = useBlockNumber()

  return (
    <Box
      sx={{
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '12px',
        color: '#a0a0a0',
        px: 4
      }}
    >
      <Box ml='auto'>{blockNumber}</Box>
    </Box>
  )
}

export default Footer
