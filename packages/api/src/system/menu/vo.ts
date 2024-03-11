import type { Page } from '../../types'

export interface MenuVo {
  /**
   * 操作按钮类型
   */
  action?: number
  actionName?: string
  /**
   * 菜单别名
   */
  alias?: string
  /**
   * 菜单类型
   */
  category?: number
  categoryName?: string
  children?: MenuVo[]
  /**
   * 菜单编号
   */
  code?: string
  hasChildren?: boolean
  id?: string
  /**
   * 是否已删除
   */
  isDeleted?: number
  /**
   * 是否打开新页面
   */
  isOpen?: number
  isOpenName?: string
  /**
   * 菜单名称
   */
  name?: string
  parentId?: string
  parentName?: string
  /**
   * 请求地址
   */
  path?: string
  /**
   * 备注
   */
  remark?: string
  /**
   * 排序
   */
  sort?: number
  /**
   * 菜单资源
   */
  source?: string
}

export type MenusVo = Page<MenuVo>
