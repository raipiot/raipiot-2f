import type { PropsWithChildren } from 'react'

import { PlatformModalContext } from '../context'
import { useUsersPlatformForm } from '../hooks'

export function PlatformModalProvider(props: PropsWithChildren) {
  // 弹窗
  const modal = useModal()
  // 弹窗表单
  const { form, formItems } = useUsersPlatformForm()

  const contentValue = useMemo(
    () => ({
      modal,
      form,
      formItems
    }),
    [modal, form, formItems]
  )

  return (
    <PlatformModalContext.Provider value={contentValue}>
      {props.children}
    </PlatformModalContext.Provider>
  )
}
