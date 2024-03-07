import type { ButtonProps } from 'antd'
import type { PropsWithChildren } from 'react'

interface RpEditBtnProps extends PropsWithChildren<ButtonProps> {}

export default function RpEditBtn(props: RpEditBtnProps) {
  const { children, ...btnProps } = props
  const { t } = useTranslation()
  return <AButton {...btnProps}>{children ?? t('EDIT')}</AButton>
}
