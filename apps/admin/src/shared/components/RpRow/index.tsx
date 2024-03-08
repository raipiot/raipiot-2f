import type { RowProps } from 'antd'
import { merge } from 'lodash-es'

interface RpRowProps extends RowProps {}

function RpRow(props: RpRowProps) {
  const defaultRowProps: RowProps = useMemo(
    () => ({
      gutter: {
        xxl: 48,
        xl: 36,
        lg: 24,
        md: 12,
        sm: 8,
        xs: 4
      }
    }),
    []
  )

  return (
    <ARow
      gutter={{
        xxl: 24,
        xl: 24,
        lg: 24,
        md: 24,
        sm: 24
      }}
      {...merge({}, defaultRowProps, props)}
    >
      {props.children}
    </ARow>
  )
}
export default RpRow
