import type { PageDto } from '../..'

export interface PostPageDto extends PageDto {
  category?: string
  postName?: string
  postCode?: string
}

export interface PostSubmitDto {
  category?: number // 岗位类型
  postCode?: string // 岗位编码
  postName?: string // 岗位名称
  remark?: string // 备注
  sort?: number // 排序
  id?: string
}
