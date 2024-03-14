import type { TenantPageDto, TenantSettingsDto, TenantSubmitDto } from '@raipiot-2f/api'
import type dayjs from 'dayjs'

export interface TenantSearchFormModel
  extends Pick<TenantPageDto, 'tenantId' | 'tenantName' | 'linkman'> {}

export interface TenantSubmitFormModel extends TenantSubmitDto {}

export interface TenantSettingFormModel extends Omit<TenantSettingsDto, 'expireTime'> {
  expireTime?: dayjs.Dayjs
}
