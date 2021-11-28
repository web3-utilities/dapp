import { useKeepalive } from '../../hooks'

export const Keepalive = ({ children }: { children: JSX.Element }) => {
  const tried = useKeepalive()

  return !tried ? null : children
}
