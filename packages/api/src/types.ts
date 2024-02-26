import type { R } from '@raipiot-2f/axios'
import { DEFAULT_PAGE_SIZE } from '@raipiot-2f/config'

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

export class PageDto {
  /**
   * 当前页码
   */
  current?: number

  /**
   * 每页条数
   */
  size?: number

  constructor(pageDto?: PageDto) {
    const { size, current } = pageDto ?? {}
    this.size = size ?? DEFAULT_PAGE_SIZE
    this.current = current ?? 1
  }
}
