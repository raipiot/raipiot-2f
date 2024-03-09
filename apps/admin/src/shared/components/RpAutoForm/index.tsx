import type { FormItemProps } from 'antd'

import type { RpFormProps } from '../RpForm'
import type { RpBasicFormItem } from '../RpFormItem/types'

export type RpAutoFormProps<T extends Record<string, any>> = RpFormProps<T> & {
  /**
   * 表单配置项
   */
  formItems: RpBasicFormItem<T>[]
}

function RpAutoForm<T extends Record<string, any>>(props: RpAutoFormProps<T>) {
  const { formItems, ...formProps } = props
  return (
    <RpForm<T> {...formProps}>
      <RpRow>
        {formItems &&
          formItems.map((item) => {
            const { type } = item
            if (type === 'custom') {
              return typeof item.render === 'function' ? item.render() : item.render
            }
            const { key, colProps, formItemProps } = item
            return (
              <RpCol
                key={key.toString()}
                {...colProps}
              >
                <RpFormItem
                  name={key as FormItemProps['name']}
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
                </RpFormItem>
              </RpCol>
            )
          })}
      </RpRow>
    </RpForm>
  )
}
export default RpAutoForm
