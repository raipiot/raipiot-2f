import type { GrantTreeVO, PermissionsSubmitDto, RolesSubmitDto } from '@raipiot-2f/api'
import type { FormInstance } from 'antd'

import type { RpBasicFormItemProps } from '@/shared/components/RpFormItem/types'
import type { UseModal } from '@/shared/hooks/useModal'

export interface SubmitFormModal extends Partial<RolesSubmitDto> {}

export interface BaseModalContextProps {
  modal: UseModal<string>
  form: FormInstance
  genFormItems: (modal: BaseModalContextProps['modal']) => RpBasicFormItemProps<SubmitFormModal>[]
}

export interface PermissionsModalMeta {
  tabsData: GrantTreeVO
  roleIds: string[]
}

export interface PermissionsModalContextProps {
  permissionsModal: UseModal<PermissionsModalMeta>
  permissionsForm: FormInstance<PermissionsSubmitDto>
}
