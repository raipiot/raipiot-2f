import type { LifecycleSupplierApplyListDto, LifecycleSupplierListDto } from '@raipiot-2f/api'
import type { Dayjs } from 'dayjs'

export interface LifecycleSearchFormModel
  extends Omit<LifecycleSupplierListDto, 'createdStartTime' | 'createdEndTime'> {
  dateRange: [Dayjs, Dayjs]
}

export interface ApplicationFormSearchFormModel
  extends Omit<LifecycleSupplierApplyListDto, 'createdStartTime' | 'createdEndTime'> {
  dateRange?: [Dayjs, Dayjs]
}

// 升级单和降级单
export interface UpgradeAndDowngradeFormModel {
  description?: string
  // applyCode?: string // 申请编号
  // annexIds?: string // 附件id
  // creatorDept?: string // 创建部门
  // grade?: string // 等级
  // id?: string // id
  // organizationId?: string // 组织id
  // score?: string // 得分
  // scoreTemplateId?: string // 评分要素（评分模板）
  // status?: string // 状态
  // supplierId?: string // 供应商id
  // supplierCode?: string // 供应商编码
  // supplierName?: string // 供应商名称
  // targetStage?: string // 目标阶段
  // currentStage?: string // 当前阶段
  // creatorName?: string // 创建人
  // createdTime?: string // 创建时间
  // base?: string // 基地

  // 黑名单
  enableBlackList?: boolean
  blackListReason?: string
  foreverBlackList?: boolean
  // 黑名单失效时间
  blackListInvalidTime?: string
}
