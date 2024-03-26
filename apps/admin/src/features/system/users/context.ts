import type { DeptTreeVo, PostVo, RoleVo } from '@raipiot-2f/api'
import type { FormInstance } from 'antd'

import type { RpBasicFormItemProps } from '@/shared/components/RpFormItem/types'
import type { UseModal } from '@/shared/hooks/useModal'

import type { UserPlatformFormModel, UserSubmitFormModel } from './types'

export interface BaseModalContextProps {
  modal: UseModal<string>
  form: FormInstance
  formItems: RpBasicFormItemProps<UserSubmitFormModel>[]
  setDynamicTreeData: (
    newDeptData: DeptTreeVo[],
    newPositionData: PostVo[],
    newRoleData: RoleVo[]
  ) => void
  setMode: (mode: 'create' | 'edit' | 'view') => void
}

export interface PlatformModalContextProps {
  modal: UseModal<string>
  form: FormInstance
  formItems: RpBasicFormItemProps<UserPlatformFormModel>[]
}

export const BaseModalContext = createContext<BaseModalContextProps | undefined>(undefined)

export const PlatformModalContext = createContext<PlatformModalContextProps | undefined>(undefined)

export const useBaseModalContext = () => {
  const context = useContext(BaseModalContext)
  if (context === undefined) {
    throw new Error('useBaseModalContext must be used within a ModalBaseProvider')
  }
  return context
}

export const usePlatformModalContext = () => {
  const context = useContext(PlatformModalContext)
  if (context === undefined) {
    throw new Error('usePlatformModalContext must be used within a PlatformModalProvider')
  }
  return context
}
