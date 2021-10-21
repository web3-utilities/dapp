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
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          fontSize: '16px'
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#f1f2f6'
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
        outlined: {
          borderRadius: 10
        },
        containedSecondary: {
          borderRadius: 10,
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
          borderRadius: 10,
          // backgroundColor: isBSC() ? '#EFB82D' : '#1164FB',
          backgroundColor: '#1164FB',
          color: '#fff',
          '&:hover': {
            // backgroundColor: isBSC() ? '#EFB23D' : '#3679f4',
            backgroundColor: '#3679f4'
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: 'none'
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          padding: '5px 0',
          boxShadow: '0px 1px 10px 0px rgba(186, 192, 204, 0.41)',
          marginTop: '10px'
        },
        list: {
          padding: '8px 0',
          maxHeight: '400px'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          padding: '12px 24px',
          fontSize: '14px !important',
          '& a': {
            display: 'flex',
            alignItems: 'center',
            width: '100%'
          },
          '& img': {
            marginRight: '10px'
          },
          '&:hover': {
            background: '#f6f6f6'
          },
          '&$selected': {
            background: '#f6f6f6',
            '&:hover': {
              background: '#f6f6f6'
            }
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#A1A8C7',
          minWidth: '60px !important',
          '&:hover': {
            color: '#444C65'
          },
          '&$selected': {
            color: '#444C65'
          },
          '&:focus': {
            color: '#444C65'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 43px 0px rgba(228, 232, 245, 0.92)',
          borderRadius: '16px'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Lexend Deca", "Roboto", "Helvetica", "Arial", sans-serif !important'
        },
        caption: {
          color: '#7B89B7',
          lineHeight: '22px'
        },
        body2: {
          color: '#767d8f'
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
          backgroundColor: '#fafafa',
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
