import type { ButtonProps } from 'antd'
import type { PropsWithChildren } from 'react'

type IgnoreProps = 'danger'

interface RpDeleteBtnProps extends PropsWithChildren<Omit<ButtonProps, IgnoreProps>> {}

function RpDeleteBtn(props: RpDeleteBtnProps) {
  const { children, ...btnProps } = props
  const { t } = useTranslation()
  return (
    <AButton
      danger
      {...btnProps}
    >
      {children ?? t('DELETE')}
    </AButton>
  )
}
export default RpDeleteBtn
