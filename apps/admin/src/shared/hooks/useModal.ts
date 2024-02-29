// create a standard modal hook
import { useState } from 'react'

interface UseModalProps {
  initVisible?: boolean
  beforeOpen?: () => void
  beforeClose?: () => void
}
export function useModal({ beforeOpen, beforeClose, initVisible }: UseModalProps = {}) {
  const [visible, setVisible] = useState(!!initVisible)

  const open = () => {
    beforeOpen?.()
    setVisible(true)
  }
  const close = () => {
    beforeClose?.()
    setVisible(false)
  }
  return {
    visible,
    open,
    close
  }
}
