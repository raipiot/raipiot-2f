import type { MaybeI18nString } from '@raipiot-infra/utils'
import type { MenuProps } from 'antd'
import type { JSXElementConstructor } from 'react'

// TODO: 考虑移到 infra
export type MenuItem = Required<MenuProps>['items'][number]

export interface ModuleMenuItem {
  label: MaybeI18nString
  key: string
  icon: React.ReactElement<any, string | JSXElementConstructor<any>>
  href?: string
}
