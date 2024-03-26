import type { PropsWithChildren } from 'react'

import { BaseModalContext } from '../context'
import { useBaseModalForm } from '../hooks'

export function BaseModalProvider(props: PropsWithChildren) {
  // 弹窗
  const modal = useModal()
  // 弹窗表单
  const { modalForm, modalFormItems, setDynamicTreeData, setMode } = useBaseModalForm()

  const contextValue = useMemo(
    () => ({
      modal,
      form: modalForm,
      formItems: modalFormItems,
      setDynamicTreeData,
      setMode
    }),
    [modal, modalForm, modalFormItems, setDynamicTreeData, setMode]
  )

  return (
    <BaseModalContext.Provider value={contextValue}>{props.children}</BaseModalContext.Provider>
  )
}
