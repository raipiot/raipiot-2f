import type { Dispatch, SetStateAction } from 'react'

import type { ModalType } from '@/features/modal'
import { modalTitleMap } from '@/features/modal/maps'

export interface UseModal {
  /**
   * 模态框当前打开状态
   * @default false
   */
  open: boolean
  /**
   * 设置模态框打开状态
   */
  setOpen: Dispatch<SetStateAction<boolean>>
  /**
   * 切换模态框打开状态
   */
  toggle: () => void
  /**
   * 模态框类型
   * @enum ['read', 'create', 'edit', 'closed']
   */
  type: ModalType
  /**
   * 设置模态框类型
   */
  setType: Dispatch<SetStateAction<ModalType>>
  /**
   * 获取模态框标题（国际化）
   */
  getTitle: () => string
  /**
   * 是否为查看模态框
   */
  isRead: boolean
  /**
   * 是否为创建模态框
   */
  isCreate: boolean
  /**
   * 是否为编辑模态框
   */
  isEdit: boolean
  /**
   * 打开查看模态框
   */
  openRead: () => void
  openCreate: () => void
  openEdit: () => void
  close: () => void
}

export const useModal = (defaultValue: boolean = false): UseModal => {
  const [open, setOpen] = useState(defaultValue)
  const [type, setType] = useState<ModalType>('closed')

  const isRead = useMemo(() => type === 'read', [type])

  const isCreate = useMemo(() => type === 'create', [type])

  const isEdit = useMemo(() => type === 'edit', [type])

  const toggle = useCallback(() => setOpen((prev) => !prev), [])

  const getTitle = useCallback(() => modalTitleMap.get(type)!(), [type])

  const openRead = useCallback(() => setType('read'), [])

  const openCreate = useCallback(() => setType('create'), [])

  const openEdit = useCallback(() => setType('edit'), [])

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => setOpen(type !== 'closed'), [type])

  useEffect(() => {
    if (!open) {
      setType('closed')
    }
  }, [open])

  return {
    open,
    setOpen,
    toggle,
    type,
    setType,
    getTitle,
    isRead,
    isCreate,
    isEdit,
    openRead,
    openCreate,
    openEdit,
    close
  }
}
