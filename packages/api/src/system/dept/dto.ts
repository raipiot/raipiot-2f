import type { DeptVo } from '.'

export interface DeptsDto {
  deptName?: string
  fullName?: string
  tenantId?: string
}

export interface DeptsSubmitDto extends Omit<DeptVo, 'id'> {
  id?: string
}
