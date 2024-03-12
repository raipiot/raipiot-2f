import type { TenantPageDto, TenantSubmitDto } from '@raipiot-2f/api'

export interface TenantSearchFormModel
  extends Pick<TenantPageDto, 'tenantId' | 'tenantName' | 'linkman'> {}

export interface TenantSubmitFormModel extends TenantSubmitDto {}
