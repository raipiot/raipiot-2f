import type { ModalType } from '@/features/modal'
import { modalTitleMap } from '@/features/modal/maps'

export const useModal = (defaultValue?: boolean) => {
  const [open, toggle] = useBoolean(!!defaultValue)
  const [modalType, setModalType] = useState<ModalType>('detail')

  const getModalTitle = () => modalTitleMap.get(modalType)!()

  return {
    open,
    toggle,
    modalType,
    setModalType,
    getModalTitle
  }
}
