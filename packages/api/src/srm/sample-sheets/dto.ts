import type { PageDto } from '../../types'

// 这个是分页的 upload dto
export interface SampleSheetsPageDto extends PageDto {
  // 日期范围
  dateRange?: [string, string]
  // 供应商
  supplier?: string
  // 单号
  orderNo?: string
  // 客户
  customer?: string
}

// 手动创建提交的 dto
export interface SampleSheetsSubmitDto {
  /**
   * 主键
   */
  id?: string
}
