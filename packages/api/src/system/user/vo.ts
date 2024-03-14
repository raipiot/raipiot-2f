import type { Page } from '../..'

export interface UserVo {
  account?: string
  avatar?: string
  birthday?: string
  code?: string
  /**
   * 创建部门
   */
  createDept?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 创建人
   */
  createUser?: string
  deptId?: string
  deptName?: string
  email?: string
  id?: string
  /**
   * 是否已删除
   */
  isDeleted?: number
  name?: string
  phone?: string
  postId?: string
  postName?: string
  realName?: string
  roleId?: string
  roleName?: string
  sex?: number
  sexName?: string
  /**
   * 业务状态
   */
  status?: number
  /**
   * 租户ID
   */
  tenantId?: string
  tenantName?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 更新人
   */
  updateUser?: string
  userExt?: string
  userType?: number
  userTypeName?: string
}

export type UsersVo = Page<UserVo>

export interface UserBriefVo {
  account?: string
  userId?: string
  userName?: string
}
