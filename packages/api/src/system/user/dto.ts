import type { PageDto } from '../../types'

export interface UserPageDto extends PageDto {
  account?: string
  realName?: string
  deptId?: string
  userType?: string
}

export interface UserListDto {
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
  /**
   * 主键id
   */
  id?: string
  /**
   * 是否已删除
   */
  isDeleted?: number
  name?: string
  password?: string
  phone?: string
  postId?: string
  realName?: string
  roleId?: string
  sex?: number
  /**
   * 业务状态
   */
  status?: number
  /**
   * 租户ID
   */
  tenantId?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 更新人
   */
  updateUser?: string
  userType?: string
}

export interface UserBriefListDto {
  account: string
  size?: number
}

export interface UserSubmitDto {
  account: string
  tenantName: string
  realName: string
  roleName: string
  deptName: string
  userTypeName: string
  userType: number
  tenantId: string
  password: string
  password2: string
  name: string
  statusName: string
  code: string
  roleId: string
  deptId: string
  postId: string
  // options
  email?: string
  phone?: string
  sex?: number
  birthday?: string
  id?: string
}

export interface UserPlatformSubmitDto {
  userId?: string
  userExt?: string
  userType?: string
  userTypeName?: string
}

export interface UpdatePasswordDto {
  newPassword: string
  newPassword1: string
  oldPassword: string
}
