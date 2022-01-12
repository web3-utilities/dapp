import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useWeb3 } from './useWeb3'

export const useKeepalive = (): boolean => {
  const { activate, active, connectors } = useWeb3()
  const [tried, setTried] = useState(false)

  useEffect(() => {
    connectors?.injectedConnector.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(connectors.injectedConnector, undefined, true).catch((e: any) => {
          console.error(e)
          setTried(true)
        })
      } else {
        if (isMobile && window.ethereum) {
          activate(connectors.injectedConnector, undefined, true).catch(() => {
            setTried(true)
          })
        } else {
          setTried(true)
        }
      }
    })
  }, [activate])

  useEffect(() => {
    if (active) {
      setTried(true)
    }
  }, [active])

  return tried
}
