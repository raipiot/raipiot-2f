import type { FormItemProps } from 'antd'

import type { ModalType } from '@/shared/hooks/useModal'

import type { RpFormProps } from '../RpForm'
import type { RpBasicFormItem } from './types'

export type RpDynamicFormProps<T extends Record<string, any>> = RpFormProps<T> & {
  /**
   * 表单配置项
   */
  items?: RpBasicFormItem<T>[]
  /**
   * 展示模式
   */
  mode?: ModalType
}

function RpDynamicForm<T extends Record<string, any>>(props: RpDynamicFormProps<T>) {
  const { items, mode, ...formProps } = props
  return (
    <RpForm<T> {...formProps}>
      <RpRow>
        {items &&
          items.map((item, index) => {
            const { type, hidden } = item
            if (hidden) {
              return null
            }
            if (type === 'custom') {
              return typeof item.render === 'function' ? item.render() : item.render
            }
            const { colProps, formItemProps } = item
            const value = formProps.form?.getFieldValue(formItemProps?.name)
            return (
              <ACol
                key={index}
                {...colProps}
              >
                <AForm.Item
                  {...formItemProps}
                  name={
                    mode === 'read' ? undefined : (formItemProps?.name as FormItemProps['name'])
                  }
                >
                  {mode === 'read' ? (
                    <>
                      {type === 'input' && <RpString value={value} />}
                      {type === 'text-area' && <RpString value={value} />}
                      {type === 'input-number' && <RpString value={value} />}
                      {type === 'switch' && <RpBoolean value={value} />}
                    </>
                  ) : (
                    <>
                      {type === 'input' && <AInput {...item.inputProps} />}
                      {type === 'text-area' && <AInput.TextArea {...item.textAreaProps} />}
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
                    </>
                  )}
                </AForm.Item>
              </ACol>
            )
          })}
      </RpRow>
    </RpForm>
  )
}
export default RpDynamicForm
