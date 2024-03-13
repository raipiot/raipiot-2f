import type { TenantPageDto, TenantSelectDto } from '@raipiot-2f/api'

export const TENANTS_QK = 'system:tenants'

export const TENANT_QK = 'system:tenant'

export const TENANTS_SELECT_QK = 'system:tenants:select'

export const tenantsQK = (params?: TenantPageDto) => [TENANTS_QK, params]

export const tenantQK = (id?: string) => [TENANT_QK, { id }]

export const tenantsSelectQK = (params?: TenantSelectDto) => [TENANTS_SELECT_QK, params]
