import type { PageDateDto } from '../..'

export interface ResourcePoolScopePageDto extends PageDateDto {
  /**
   * 资源池类型
   */
  resourcePoolTypeId: string
}

export interface ResourcePoolScopeCreateDto {
  /**
   * 基地 ID 集合
   */
  baseIds: string[]
  /**
   * 品类 ID 集合
   */
  categoryIds?: string[]
  /**
   * 资源池类型(1 - 按基地隔离 2 - 按品类隔离)
   */
  isolationTypeId: string
  /**
   * 资源池名称
   */
  name: string
}

export interface ResourcePoolScopeUpdateDto {
  /**
   * 主键 ID
   */
  id: string
  /**
   * 新增基地 ID 集合
   */
  addBaseIds?: string[]
  /**
   * 新增品类 ID 集合
   */
  addCategoryIds?: string[]
  /**
   * 删除基地 ID 集合
   */
  deleteBaseIds?: string[]
  /**
   * 删除品类 ID 集合
   */
  deleteCategoryIds?: string[]
  /**
   * 资源池名称
   */
  name?: string
}
