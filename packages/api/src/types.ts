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
