import type { FormInstance } from 'antd'

import type { RpBasicFormItemProps } from '@/shared/components/RpFormItem/types'
import type { UseModal } from '@/shared/hooks/useModal'

import type { QuestionnaireSubmitFormModel } from './types'

interface BaseModalContextProps {
  modal: UseModal<string>
  form: FormInstance
  formItems: RpBasicFormItemProps<QuestionnaireSubmitFormModel>[]
}

export const BaseModalContext = createContext<BaseModalContextProps | undefined>(undefined)

export const useBaseModalContext = () => {
  const context = useContext(BaseModalContext)
  if (context === undefined) {
    throw new Error('useBaseModalContext must be used within a ModalBaseProvider')
  }
  return context
}
