import type { CardProps } from 'antd'

export interface RpCardProps extends CardProps {}

function RpCard(props: RpCardProps) {
  const { children, ...restProps } = props
  return <ACard {...restProps}>{children}</ACard>
}
export default RpCard
