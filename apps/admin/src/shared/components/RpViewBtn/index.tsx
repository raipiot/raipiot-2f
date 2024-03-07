import type { ButtonProps } from 'antd'
import type { PropsWithChildren } from 'react'

interface RpViewBtnProps extends PropsWithChildren<ButtonProps> {}

function RpViewBtn(props: RpViewBtnProps) {
  const { children, ...btnProps } = props
  const { t } = useTranslation()
  return <AButton {...btnProps}>{children ?? t('VIEW')}</AButton>
}
export default RpViewBtn
