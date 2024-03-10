import type { FormItemProps } from 'antd'

import type { RpFormProps } from '../RpForm'
import type { RpBasicFormItem } from './types'

export type RpDynamicFormProps<T extends Record<string, any>> = RpFormProps<T> & {
  /**
   * 表单配置项
   */
  items?: RpBasicFormItem<T>[]
}

function RpDynamicForm<T extends Record<string, any>>(props: RpDynamicFormProps<T>) {
  const { items, ...formProps } = props
  return (
    <RpForm<T> {...formProps}>
      <RpRow>
        {items &&
          items.map((item, index) => {
            const { type } = item
            if (type === 'custom') {
              return typeof item.render === 'function' ? item.render() : item.render
            }
            const { colProps, formItemProps } = item
            return (
              <RpCol
                key={index}
                {...colProps}
              >
                <AForm.Item
                  name={formItemProps?.name as FormItemProps['name']}
                  {...formItemProps}
                >
                  {type === 'input' && <AInput {...item.inputProps} />}
                  {type === 'select' && <ASelect {...item.selectProps} />}
                  {type === 'tree-select' && <ATreeSelect {...item.treeSelectProps} />}
                  {type === 'cascader' && <ACascader {...item.cascaderProps} />}
                  {type === 'date-picker' && <ADatePicker {...item.datePickerProps} />}
                  {type === 'input-number' && <AInputNumber {...item.inputNumberProps} />}
                  {type === 'switch' && <ASwitch {...item.switchProps} />}
                  {type === 'button' && (
                    <AButton {...item.buttonProps}>{item.buttonProps?.children}</AButton>
                  )}
                  {type === 'form-item' &&
                    (typeof item.render === 'function' ? item.render() : item.render)}
                </AForm.Item>
              </RpCol>
            )
          })}
      </RpRow>
    </RpForm>
  )
}
export default RpDynamicForm
