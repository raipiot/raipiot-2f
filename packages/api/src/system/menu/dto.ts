export interface LazyMenuPageDto {
  code?: string
  name?: string
  parentId?: string
  alias?: string
}

export interface MenuSubmitDto {
  /**
   * 操作按钮类型
   */
  action?: number
  /**
   * 菜单别名
   */
  alias?: string
  /**
   * 菜单类型
   */
  category?: number
  /**
   * 菜单编号
   */
  code?: string
  /**
   * 主键
   */
  id?: string
  /**
   * 是否已删除
   */
  isDeleted?: number
  /**
   * 是否打开新页面
   */
  isOpen?: number
  /**
   * 菜单名称
   */
  name?: string
  /**
   * 菜单父主键
   */
  parentId?: string
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
