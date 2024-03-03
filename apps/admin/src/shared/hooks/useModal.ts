import type { ModalType } from '@/features/modal'
import { modalTitleMap } from '@/features/modal/maps'

export const useModal = (defaultValue: boolean = false) => {
  const [open, setOpen] = useState(defaultValue)
  const [modalType, setModalType] = useState<ModalType>('read')

  const toggle = useCallback(() => setOpen((prev) => !prev), [])

  const getModalTitle = useCallback(() => modalTitleMap.get(modalType)!(), [modalType])

  return {
    open,
    setOpen,
    toggle,
    modalType,
    setModalType,
    getModalTitle
  }
}
