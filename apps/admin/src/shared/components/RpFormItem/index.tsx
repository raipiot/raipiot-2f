import type { FormItemProps } from 'antd'

interface RpFormItemProps extends FormItemProps {}

function RpFormItem(props: RpFormItemProps) {
  return <AForm.Item {...props}>{props.children}</AForm.Item>
}
export default RpFormItem
