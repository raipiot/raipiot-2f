import type { RolesDto } from '@raipiot-2f/api'

export const ROLES_QK = 'system:roles'

export const ROLE_QK = 'system:role'

export const ROLE_TREE_QK = 'system:role-tree'

export const rolesQK = (params?: RolesDto) => [ROLES_QK, params]

export const roleQK = (id?: string) => [ROLE_QK, { id }]

export const roleTreeQK = (tenantId?: string) => [ROLE_TREE_QK, { tenantId }]
