// create a standard modal hook
import { useState } from 'react'

interface UseModal {
  initVisible?: boolean
  beforeOpen?: () => void
  beforeClose?: () => void
}
export function useModal({ beforeOpen, beforeClose, initVisible }: UseModal = {}) {
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
