import type { MenuProps } from 'antd'
import type { JSXElementConstructor } from 'react'

import type { I18nString } from '../i18n/types'

// TODO: 考虑移到 infra
export type MenuItem = Required<MenuProps>['items'][number]

export interface ModuleMenuItem {
  title: I18nString
  code: string
  icon: React.ReactElement<any, string | JSXElementConstructor<any>>
  href?: string
}
