import type { Page } from '../../types'
import type { PostSubmitDto } from './dto'

export interface PostVo extends PostSubmitDto {
  categoryName?: string // 岗位类型名称
  createDept?: number // 创建部门
  createTime?: string
  createUser?: string
  isDeleted?: number
  status?: number // 状态
  tenantId?: string
  updateTime?: string
  updateUser?: string
}

export type PostsVo = Page<PostVo>
