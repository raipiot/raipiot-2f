export interface DeptVo {
  id: string
  tenantId: string
  parentId: string
  fullName: string
  deptName: string
  ancestors: string
  deptCategory: number
  sort: number
  remark: string
  isDeleted: number
  hasChildren: boolean
  parentName: string
  deptCategoryName: string
  children?: DeptVo[]
}

export interface DeptTreeVo {
  hasChildren: boolean
  id: string
  key: string
  parentId: string
  title: string
  value: string
  children?: DeptTreeVo[]
}
