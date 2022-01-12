import { createTheme } from '@mui/material'

export const theme = createTheme({
  spacing: 5,
  palette: {
    primary: {
      light: '#e1edff',
      main: '#1164FB'
    },
    secondary: {
      main: '#FD7C25'
    }
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '12px',
          width: '380px',
          maxWidth: '100%'
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained'
      },
      styleOverrides: {
        root: {
          fontSize: '13px',
          textTransform: 'capitalize'
        },
        contained: {
          backgroundColor: '#f1f2f6',
          '&:hover': {
            backgroundColor: '#f1f2f2'
          }
        },
        sizeSmall: {
          minWidth: '56px',
          padding: '4px 5px'
        },
        sizeLarge: {
          height: '50px'
        },
        outlined: {},
        containedSecondary: {
          backgroundColor: '#00D9A7',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#00D9A7 !important'
          },
          '&:active': {
            backgroundColor: '#00D9A7 !important'
          }
        },
        containedPrimary: {
          backgroundColor: '#1164FB',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#3679f4'
          }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          WebkitFontSmoothing: 'auto'
        },
        body: {
          overflow: 'inherit !important',
          // background: 'radial-gradient(50% 50% at 50% 50%,#fc077d10 0,rgba(255,255,255,0) 100%)',
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif !important'
        },
        button: {
          textTransform: 'capitalize !important'
        },
        a: {
          textDecoration: 'none'
        }
      }
    }
  }
})
