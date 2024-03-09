import type { ColProps } from 'antd'

interface RpColProps extends ColProps {}

function RpCol(props: RpColProps) {
  return <ACol {...props} />
}
export default RpCol
