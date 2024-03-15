import type { PropsWithChildren } from 'react'

import { BaseModalContext } from '../context'
import { useModalForm } from '../hooks'

export function BaseModalProvider(props: PropsWithChildren) {
  // 弹窗
  const modal = useModal()
  // 弹窗表单
  const { form, genFormItems } = useModalForm()

  const contextValue = useMemo(
    () => ({
      modal,
      form,
      genFormItems
    }),
    [modal, form, genFormItems]
  )

  return (
    <BaseModalContext.Provider value={contextValue}>{props.children}</BaseModalContext.Provider>
  )
}
