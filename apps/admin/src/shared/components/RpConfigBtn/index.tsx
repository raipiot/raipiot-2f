import type { ButtonProps } from 'antd'
import type { PropsWithChildren } from 'react'

interface RpConfigBtnProps extends PropsWithChildren<ButtonProps> {}

export default function RpConfigBtn(props: RpConfigBtnProps) {
  const { children, ...btnProps } = props
  const { t } = useTranslation()
  return <AButton {...btnProps}>{children ?? t('CONFIG')}</AButton>
}
