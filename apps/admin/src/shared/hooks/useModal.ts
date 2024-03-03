import type { ModalType } from '@/features/modal'
import { modalTitleMap } from '@/features/modal/maps'

export const useModal = (defaultValue?: boolean) => {
  const [open, setOpen] = useState(defaultValue)
  const [modalType, setModalType] = useState<ModalType>('read')

  const toggle = () => setOpen((prev) => !prev)

  const getModalTitle = () => modalTitleMap.get(modalType)!()

  return {
    open,
    setOpen,
    toggle,
    modalType,
    setModalType,
    getModalTitle
  }
}
