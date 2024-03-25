import type {
  ResourcePoolScopeCategoryPageDto,
  ResourcePoolScopeCompanyPageDto,
  ResourcePoolScopeCreateDto,
  ResourcePoolScopePageDto
} from '@raipiot-2f/api'
import type dayjs from 'dayjs'

export interface ResourcePoolScopeSearchFormModel
  extends Omit<ResourcePoolScopePageDto, 'size' | 'current'> {
  createdTime?: [dayjs.Dayjs, dayjs.Dayjs]
  base?: string
}

export interface ResourcePoolScopeCreateFormModel extends ResourcePoolScopeCreateDto {}

export interface ResourcePoolScopeCompanySearchFormModel
  extends Omit<ResourcePoolScopeCompanyPageDto, 'size' | 'current'> {
  name?: string
  code?: string
}

export interface ResourcePoolScopeCategorySearchFormModel
  extends Omit<ResourcePoolScopeCategoryPageDto, 'size' | 'current'> {
  lgCode?: string
  mdCode?: string
  smCode?: string
  lgName?: string
  mdName?: string
  smName?: string
}
