import type { PropsWithChildren } from 'react'

import { PlatformModalContext } from '../context'
import { usePlatformForm } from '../hooks'

export function PlatformModalProvider(props: PropsWithChildren) {
  // 弹窗
  const modal = useModal()
  // 弹窗表单
  const { form, formItems } = usePlatformForm()

  const contextValue = useMemo(
    () => ({
      modal,
      form,
      formItems
    }),
    [modal, form, formItems]
  )

  return (
    <PlatformModalContext.Provider value={contextValue}>
      {props.children}
    </PlatformModalContext.Provider>
  )
}
