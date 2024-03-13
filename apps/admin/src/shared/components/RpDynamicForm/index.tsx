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
  const { t } = useTranslation()
  const span = useResponsiveSpan()
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
              return item.render ? item.render(formProps.form?.getFieldsValue(true), index) : null
            }
            const { colProps, formItemProps } = item
            const value = formItemProps?.name
              ? formProps.form?.getFieldValue(formItemProps?.name)
              : undefined
            const record = formProps.form?.getFieldsValue(true)
            return (
              <ACol
                key={index}
                span={span}
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
                      {type === 'tree-select' && (
                        <ATreeSelect
                          value={value}
                          variant="borderless"
                          suffixIcon={null}
                          {...item.treeSelectProps}
                        />
                      )}
                      {type === 'select' && (
                        <ASelect
                          value={String(value)}
                          variant="borderless"
                          suffixIcon={null}
                          {...item.selectProps}
                        />
                      )}
                      {type === 'switch' && (
                        <RpBoolean
                          value={value}
                          variant="borderless"
                        />
                      )}
                      {type === 'radio-group' && (
                        <ARadio.Group
                          value={value}
                          {...item.radioGroupProps}
                        />
                      )}
                      {type === 'upload' && (
                        <RpUpload
                          disabled
                          {...item.uploadProps}
                        />
                      )}
                      {type === 'date-picker' && (
                        <ADatePicker
                          value={value}
                          variant="borderless"
                          {...item.datePickerProps}
                        />
                      )}
                      {type === 'form-item' && (item.render ? item.render(value, record) : null)}
                    </>
                  ) : (
                    <>
                      {type === 'input' && <AInput {...item.inputProps} />}
                      {type === 'text-area' && <AInput.TextArea {...item.textAreaProps} />}
                      {type === 'radio-group' && <ARadio.Group {...item.radioGroupProps} />}
                      {type === 'select' && <ASelect {...item.selectProps} />}
                      {type === 'tree-select' && <ATreeSelect {...item.treeSelectProps} />}
                      {type === 'cascader' && <ACascader {...item.cascaderProps} />}
                      {type === 'date-picker' && <ADatePicker {...item.datePickerProps} />}
                      {type === 'input-number' && <AInputNumber {...item.inputNumberProps} />}
                      {type === 'upload' && <RpUpload {...item.uploadProps} />}
                      {type === 'switch' && (
                        <ASwitch
                          checkedChildren={t('Y')}
                          unCheckedChildren={t('N')}
                          {...item.switchProps}
                        />
                      )}
                      {type === 'button' && (
                        <AButton {...item.buttonProps}>{item.buttonProps?.children}</AButton>
                      )}
                      {type === 'form-item' &&
                        (typeof item.render === 'function'
                          ? item.render(value, record, index)
                          : item.render)}
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
