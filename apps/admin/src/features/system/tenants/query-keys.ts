import type { TenantPageDto } from '@raipiot-2f/api'

export const TENANTS_QK = 'system:tenants'

export const TENANT_QK = 'system:tenant'

export const tenantsQK = (params?: TenantPageDto) => [TENANTS_QK, params]

export const tenantQK = (id?: string) => [TENANT_QK, { id }]
