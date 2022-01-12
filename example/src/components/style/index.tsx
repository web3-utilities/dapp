import { Box, BoxProps, StyledComponentProps } from '@mui/material'
import React from 'react'

export interface WithBoxProps extends BoxProps, StyledComponentProps {
  children?: React.ReactNode
  className?: string
}

interface TokenWithNameProps extends WithBoxProps {
  src: string
  width: number
  name?: string | undefined
}

export const TokenWithName = ({ src, width, name, ...other }: TokenWithNameProps): JSX.Element => {
  return (
    <Box display='flex' alignItems='center' fontSize={14} {...other}>
      <img src={src} alt='token' width={width} /> &nbsp;
      {name}
    </Box>
  )
}
