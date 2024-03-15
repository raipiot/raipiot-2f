import type { FormInstance } from 'antd'

import type { RpBasicFormItem } from '@/shared/components/RpDynamicForm/types'
import type { UseModal } from '@/shared/hooks/useModal'

import type { SystemDictSubmitFormModel } from './types'

interface BaseModalContextProps {
  modal: UseModal<string>
  form: FormInstance
  formItems: RpBasicFormItem<SystemDictSubmitFormModel>[]
}

export const BaseModalContext = createContext<BaseModalContextProps | undefined>(undefined)

export const useBaseModalContext = () => {
  const context = useContext(BaseModalContext)
  if (context === undefined) {
    throw new Error('useBaseModalContext must be used within a ModalBaseProvider')
  }
  return context
}
