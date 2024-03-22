import type { FormInstance } from 'antd'
import type { Key } from 'react'

import type { RpBasicFormItemProps } from '@/shared/components/RpFormItem/types'
import type { UseModal } from '@/shared/hooks/useModal'

import type { TenantSettingFormModel } from './types'

interface SettingModalContextProps {
  modal?: UseModal<string>
  form?: FormInstance
  formItems?: RpBasicFormItemProps<TenantSettingFormModel>[]
  selectedRowKeys?: Key[]
  clearSelectedRowKeys?: () => void
}

export const SettingModalContext = createContext<SettingModalContextProps>({})
