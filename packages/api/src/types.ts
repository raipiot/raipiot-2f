import type { R } from '@raipiot-2f/axios'

export type { R }

// 分页数据
export interface Page<T = unknown> {
  /**
   * 数据列表
   */
  records: T[]
  /**
   * 当前页码
   */
  current: number
  /**
   * 总页数
   */
  pages: number
  /**
   * 每页条数
   */
  size: number
  /**
   * 总条数
   */
  total: number
}

export interface PageDto {
  /**
   * 当前页码
   */
  current: number

  /**
   * 每页条数
   */
  size: number
}

export interface PageDateDto extends PageDto {
  /**
   * 创建开始时间
   */
  createdStartTime?: string

  /**
   * 创建结束时间
   */
  createdEndTime?: string

  /**
   * 更新开始时间
   */
  updateStartTime?: string

  /**
   * 更新结束时间
   */
  updatedEndTime?: string
}

export enum Sex {
  MAN = 1,
  FEMALE = 2,
  UNKNOWN = 3
}
