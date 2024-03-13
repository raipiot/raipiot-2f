import type { TenantPageDto, TenantSettingsDto, TenantSubmitDto } from '@raipiot-2f/api'

export interface TenantSearchFormModel
  extends Pick<TenantPageDto, 'tenantId' | 'tenantName' | 'linkman'> {}

export interface TenantSubmitFormModel extends TenantSubmitDto {}

export interface TenantSettingFormModel extends TenantSettingsDto {}
