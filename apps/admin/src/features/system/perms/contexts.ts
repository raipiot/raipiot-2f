import type { ScopeSubmitDto } from '@raipiot-2f/api'
import type { FormInstance } from 'antd'

import type { RpBasicFormItem } from '@/shared/components/RpDynamicForm/types'
import type { UseModal } from '@/shared/hooks/useModal'

export interface ScopeContextProps {
  modal: UseModal<Partial<ScopeSubmitDto>>
  form: FormInstance
  formItems: RpBasicFormItem<Partial<ScopeSubmitDto>>[]
}

export const ScopeConfigContext = createContext<undefined | ScopeContextProps>(undefined)

export const useScopeConfigContext = () => {
  const context = useContext(ScopeConfigContext)
  if (!context) {
    throw new Error('useScopeConfigContext must be used within a BaseModalProvider')
  }
  return context
}
