import type { ModalType } from './useModal'

interface ResponsiveModalTypeOptions {
  /**
   * 创建弹窗宽度
   * @default '80%'
   */
  create?: string
  /**
   * 编辑弹窗宽度
   * @default '80%'
   */
  edit?: string
  /**
   * 查看弹窗宽度
   * @default '70%'
   */
  read?: string
}

/**
 * 响应式弹窗宽度
 */
export const useResponsiveModalWidth = (type?: ModalType, options?: ResponsiveModalTypeOptions) => {
  const {
    create = 'min(1440px, 80%)',
    edit = 'min(1440px, 80%)',
    read = 'min(1440px, 70%)'
  } = options ?? {}

  const responsive = useResponsive()

  if (!responsive.sm) {
    return '90%'
  }
  if (type === 'read') {
    return read
  }
  if (type === 'edit') {
    return edit
  }
  return create
}
