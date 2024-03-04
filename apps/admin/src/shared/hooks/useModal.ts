import type { Dispatch, SetStateAction } from 'react'

import type { ModalType } from '@/features/modal'
import { modalTitleMap } from '@/features/modal/maps'

interface UseModalProps<T> {
  meta: T
  open?: boolean
}

export interface UseModal<T = any> {
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
   * 模态框元数据
   */
  meta?: T
  /**
   * 设置模态框元数据
   */
  setMeta: Dispatch<SetStateAction<T | undefined>>
  /**
   * 重置模态框元数据
   */
  resetMeta: () => void
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
  /**
   * 打开创建模态框
   */
  openCreate: () => void
  /**
   * 打开编辑模态框
   */
  openEdit: () => void
  /**
   * 关闭模态框
   */
  close: () => void
}

export const useModal = <T = any>(props?: UseModalProps<T>): UseModal<T> => {
  const { meta: defaultMeta, open: defaultValue = false } = props ?? {}

  const [meta, setMeta] = useState<T | undefined>(defaultMeta)
  const [open, setOpen] = useState(defaultValue)
  const [type, setType] = useState<ModalType>('closed')

  const isRead = useMemo(() => type === 'read', [type])
  const isCreate = useMemo(() => type === 'create', [type])
  const isEdit = useMemo(() => type === 'edit', [type])

  const toggle = useCallback(() => setOpen((prev) => !prev), [])

  const getTitle = useCallback(() => modalTitleMap.get(type)!(), [type])

  const resetMeta = useCallback(() => setMeta(defaultMeta), [defaultMeta])

  const openRead = useCallback(() => setType('read'), [])

  const openCreate = useCallback(() => setType('create'), [])

  const openEdit = useCallback(() => setType('edit'), [])

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => setOpen(type !== 'closed'), [type])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null
    if (!open) {
      timeoutId = setTimeout(() => {
        setType('closed')
      }, 100) // 延迟执行，避免模态框宽度闪烁
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [open])

  return {
    open,
    setOpen,
    toggle,
    type,
    setType,
    getTitle,
    meta,
    setMeta,
    resetMeta,
    isRead,
    isCreate,
    isEdit,
    openRead,
    openCreate,
    openEdit,
    close
  }
}
