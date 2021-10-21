import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { getInjectedConnector } from '../connectors'
import { useWeb3 } from './useWeb3'

export const useKeepalive = (): boolean => {
  const { activate, active } = useWeb3()
  const [tried, setTried] = useState(false)

  useEffect(() => {
    const connector = getInjectedConnector()
    connector.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(connector, undefined, true).catch((e: any) => {
          console.error(e)
          setTried(true)
        })
      } else {
        if (isMobile && window.ethereum) {
          activate(connector, undefined, true).catch(() => {
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
