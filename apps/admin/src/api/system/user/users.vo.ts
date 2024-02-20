export interface UserVo {
  account?: string
  avatar?: string
  birthday?: Date
  code?: string
  /**
   * 创建部门
   */
  createDept?: number
  /**
   * 创建时间
   */
  createTime?: Date
  /**
   * 创建人
   */
  createUser?: number
  deptId?: string
  deptName?: string
  email?: string
  id?: number
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
  updateTime?: Date
  /**
   * 更新人
   */
  updateUser?: number
  userExt?: string
  userType?: number
  userTypeName?: string
}
