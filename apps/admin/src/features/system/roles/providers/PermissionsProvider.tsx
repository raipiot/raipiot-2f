import type { PermissionsSubmitDto } from '@raipiot-2f/api'
import type { PropsWithChildren } from 'react'

import { PermissionsModalContext } from '../context'
import type { PermissionsModalMeta } from '../types'

export function PermissionsProvider(props: PropsWithChildren) {
  // 弹窗
  const permissionsModal = useModal<PermissionsModalMeta>()
  const permissionsForm = AForm.useForm<PermissionsSubmitDto>()[0]
  // 弹窗表单

  const contextValue = useMemo(
    () => ({
      permissionsModal,
      permissionsForm
    }),
    [permissionsForm, permissionsModal]
  )

  return (
    <PermissionsModalContext.Provider value={contextValue}>
      {props.children}
    </PermissionsModalContext.Provider>
  )
}
