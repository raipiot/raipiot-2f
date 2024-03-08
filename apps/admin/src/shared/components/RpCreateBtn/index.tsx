import type { ButtonProps } from 'antd'
import type { PropsWithChildren } from 'react'

type IgnoreProps = 'type'

interface RpCreateBtnProps extends PropsWithChildren<Omit<ButtonProps, IgnoreProps>> {}

function RpCreateBtn(props: RpCreateBtnProps) {
  const { children, ...btnProps } = props
  const { t } = useTranslation()
  return (
    <AButton
      type="primary"
      {...btnProps}
    >
      {children ?? t('CREATE')}
    </AButton>
  )
}
export default RpCreateBtn
