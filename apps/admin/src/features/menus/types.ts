import type { MenuProps } from 'antd'
// TODO: 考虑移到 infra
export type MenuItem = Required<MenuProps>['items'][number]
