import type { DeptsSubmitDto } from '@raipiot-2f/api'
import type { FormInstance } from 'antd'

import type { RpBasicFormItemProps } from '@/shared/components/RpFormItem/types'
import type { UseModal } from '@/shared/hooks/useModal'

export interface SubmitFormModal extends Partial<DeptsSubmitDto> {}

export interface BaseModalContextProps {
  modal: UseModal<Partial<DeptsSubmitDto>>
  form: FormInstance
  formItems: RpBasicFormItemProps<SubmitFormModal>[]
}
