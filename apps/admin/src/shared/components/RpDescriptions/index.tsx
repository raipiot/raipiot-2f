import type { DescriptionsProps } from 'antd'

export interface RpDescriptionsProps extends DescriptionsProps {}

function RpDescriptions(props: RpDescriptionsProps) {
  return (
    <ADescriptions
      bordered
      {...props}
    />
  )
}
export default RpDescriptions
