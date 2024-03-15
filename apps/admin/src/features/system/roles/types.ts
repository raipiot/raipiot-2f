import type { RolesSubmitDto } from '@raipiot-2f/api'
import type { FormInstance } from 'antd'

import type { RpBasicFormItem } from '@/shared/components/RpDynamicForm/types'
import type { UseModal } from '@/shared/hooks/useModal'

export interface SubmitFormModal extends Partial<RolesSubmitDto> {}

export interface BaseModalContextProps {
  modal: UseModal<string>
  form: FormInstance
  genFormItems: (modal: BaseModalContextProps['modal']) => RpBasicFormItem<SubmitFormModal>[]
}
