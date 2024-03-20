import type { ScopeSubmitDto } from '@raipiot-2f/api'
import type { PropsWithChildren } from 'react'

import { ScopeConfigContext } from '../contexts'
import { useBaseModalForm } from '../hooks'

export function ModalProvider({ children }: PropsWithChildren) {
  // 弹窗
  const modal = useModal<Partial<ScopeSubmitDto>>()
  // 弹窗表单
  const { modalForm, modalFormItems } = useBaseModalForm()

  const contextValue = useMemo(
    () => ({
      modal,
      form: modalForm,
      formItems: modalFormItems
    }),
    [modal, modalForm, modalFormItems]
  )

  return <ScopeConfigContext.Provider value={contextValue}>{children}</ScopeConfigContext.Provider>
}
