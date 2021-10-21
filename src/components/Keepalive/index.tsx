import { useKeepalive } from '../../hooks'

export const Keepalive = ({ children }: { children: JSX.Element }) => {
  useKeepalive()

  return children
}
