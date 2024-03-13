import type { DeptsDto } from '@raipiot-2f/api'

export const DEPTS_QK = 'system:depts'

export const DEPT_QK = 'system:dept'

export const DEPT_TREE_QK = 'system:dept-tree'

export const deptsQK = (params?: DeptsDto) => [DEPTS_QK, params]

export const deptQK = (id?: string) => [DEPT_QK, { id }]

export const deptsTreeQK = () => [DEPT_TREE_QK]
