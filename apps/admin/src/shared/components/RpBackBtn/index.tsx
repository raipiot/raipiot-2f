import type { ButtonProps } from 'antd'
import type { PropsWithChildren } from 'react'

interface RpBackBtnProps extends PropsWithChildren<ButtonProps> {}

function RpBackBtn(props: RpBackBtnProps) {
  const { children, ...btnProps } = props
  const { t } = useTranslation()
  return <AButton {...btnProps}>{children ?? t('BACK')}</AButton>
}
export default RpBackBtn
