import type { UserPageDto, UserPlatformSubmitDto, UserSubmitDto } from '@raipiot-2f/api'
import type { FormInstance } from 'antd'

import type { RpBasicFormItem } from '@/shared/components/RpDynamicForm/types'
import type { UseModal } from '@/shared/hooks/useModal'

export interface UserSearchFormModel extends Omit<UserPageDto, 'size' | 'current'> {}

export interface UserSubmitFormModel extends UserSubmitDto {}

export interface UserPlatformFormModel extends UserPlatformSubmitDto {}

export interface BaseModalContextProps {
  modal: UseModal<string>
  form: FormInstance
  formItems: RpBasicFormItem<UserSubmitFormModel>[]
}

export interface PlatformModalContextProps {
  modal: UseModal<string>
  form: FormInstance
  formItems: RpBasicFormItem<UserPlatformFormModel>[]
}
