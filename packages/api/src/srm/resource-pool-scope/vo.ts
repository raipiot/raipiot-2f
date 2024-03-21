import type { Page } from '../../types'

export interface ResourcePoolScopeVo {
  /**
   * 资源池编码
   */
  code?: string
  /**
   * 创建时间
   */
  createdTime?: string
  /**
   * 创建用户 ID
   */
  creatorId?: number
  /**
   * 创建用户名
   */
  creatorName?: string
  /**
   * 主键 ID
   */
  id?: string
  /**
   * 资源池名称
   */
  name?: string
  /**
   * 资源池类型(1-按基地隔离 2-按品类隔离)
   */
  resourcePoolTypeId?: string
  /**
   * 资源池类型(1-按基地隔离 2-按品类隔离)
   */
  resourcePoolTypeName?: string
  /**
   * 更新时间
   */
  updatedTime?: string
  /**
   * 更新用户 ID
   */
  updaterId?: number
  /**
   * 更新用户名
   */
  updaterName?: string
  /**
   * 基地集合
   */
  baseList?: BaseVO[]
  /**
   * 品类集合
   */
  categoryList?: CategoryVO[]
}

interface BaseVO {
  /**
   * 公司编码
   */
  companyCode?: string
  /**
   * 公司名称
   */
  companyName?: string
  /**
   * 主键 ID
   */
  id?: string
}

interface CategoryVO {
  /**
   * 品类编码
   */
  categoryCode?: string
  /**
   * 品类名称
   */
  categoryName?: string
  /**
   * 品类描述
   */
  description?: string
  /**
   * 主键 ID
   */
  id?: string
}

export type ResourcePoolScopesVo = Page<ResourcePoolScopeVo>
