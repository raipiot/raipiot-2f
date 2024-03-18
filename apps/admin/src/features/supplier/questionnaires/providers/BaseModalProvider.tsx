import type { PropsWithChildren } from 'react'

import { BaseModalContext } from '../context'
import { useBaseModalForm } from '../hooks'

export function BaseModalProvider(props: PropsWithChildren) {
  // 弹窗
  const modal = useModal()
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

  return (
    <BaseModalContext.Provider value={contextValue}>{props.children}</BaseModalContext.Provider>
  )
}
