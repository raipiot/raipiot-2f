import type { FormItemProps } from 'antd'
import type { InputProps } from 'antd/lib'

interface CommomInputItemProps {
  itemProps?: FormItemProps
  inputProps?: InputProps
  renderChildren?: React.ReactNode
}
export default function RpFormInputItem({
  itemProps = {},
  inputProps = {},
  renderChildren
}: CommomInputItemProps) {
  return (
    <AForm.Item
      {...itemProps}
      style={{
        marginRight: '12px',
        ...itemProps.style
      }}
    >
      {renderChildren ?? <AInput {...inputProps} />}
    </AForm.Item>
  )
}
