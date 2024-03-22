import type { FormItemProps } from 'antd'

import type { RpBasicFormItemProps } from './types'

function RpFormItem<T>(props: RpBasicFormItemProps<T>): React.ReactNode {
  const { type, hidden, form, mode = 'edit' } = props
  const { t } = useTranslation()
  const span = useResponsiveSpan()

  if (hidden) {
    return null
  }

  if (type === 'custom') {
    return props.render ? props.render() : null
  }

  const { colProps, formItemProps } = props

  const value = formItemProps?.name ? form?.getFieldValue(formItemProps?.name) : undefined
  const record = form?.getFieldsValue(true)

  const isContainer = ['collapse-item', 'row', 'group'].includes(type)

  return (
    <ACol
      span={isContainer ? 24 : span}
      {...colProps}
    >
      <AForm.Item
        {...formItemProps}
        name={mode === 'read' ? undefined : (formItemProps?.name as FormItemProps['name'])}
      >
        {mode === 'read' ? (
          <>
            {type === 'input' && <RpField value={value} />}
            {type === 'input-number' && <RpField value={value} />}
            {type === 'text-area' && <RpField value={value} />}
            {type === 'select' && (
              <ASelect
                value={String(value)}
                variant="borderless"
                suffixIcon={null}
                {...props.selectProps}
              />
            )}
            {type === 'tree-select' && (
              <ATreeSelect
                value={value}
                variant="borderless"
                suffixIcon={null}
                {...props.treeSelectProps}
              />
            )}
            {type === 'switch' && (
              <RpField
                value={value}
                booleanValue
              />
            )}
            {type === 'radio-group' && (
              <ARadio.Group
                value={value}
                {...props.radioGroupProps}
              />
            )}
            {type === 'upload' && (
              <RpUpload
                disabled
                {...props.uploadProps}
              />
            )}
            {type === 'date-picker' && (
              <ADatePicker
                value={value}
                variant="borderless"
                readOnly
                {...props.datePickerProps}
              />
            )}
            {type === 'form-item' && (props.render ? props.render(value, record) : null)}
          </>
        ) : (
          <>
            {type === 'input' && <AInput {...props.inputProps} />}
            {type === 'text-area' && <AInput.TextArea {...props.textAreaProps} />}
            {type === 'radio-group' && <ARadio.Group {...props.radioGroupProps} />}
            {type === 'select' && <ASelect {...props.selectProps} />}
            {type === 'tree-select' && <ATreeSelect {...props.treeSelectProps} />}
            {type === 'cascader' && <ACascader {...props.cascaderProps} />}
            {type === 'date-picker' && <ADatePicker {...props.datePickerProps} />}
            {type === 'range-picker' && <ADatePicker.RangePicker {...props.rangePickerProps} />}
            {type === 'input-number' && <AInputNumber {...props.inputNumberProps} />}
            {type === 'upload' && <RpUpload {...props.uploadProps} />}
            {type === 'switch' && (
              <ASwitch
                checkedChildren={t('Y')}
                unCheckedChildren={t('N')}
                {...props.switchProps}
              />
            )}
            {type === 'button' && (
              <AButton {...props.buttonProps}>{props.buttonProps?.children}</AButton>
            )}
            {type === 'form-item' &&
              (typeof props.render === 'function' ? props.render(value, record) : props.render)}
            {type === 'group' &&
              Array.isArray(props?.items) &&
              props.items.map((item, index) => (
                <RpFormItem
                  key={index}
                  {...item}
                  form={form}
                  mode={mode}
                />
              ))}
            {type === 'collapse' && <ACollapse {...props.collapseProps} />}
            {type === 'collapse-item' && (
              <ACollapse
                items={[
                  {
                    label: props.collapseItemProps?.label,
                    children:
                      Array.isArray(props?.items) &&
                      props.items.map((item, index) => (
                        <RpFormItem
                          key={index}
                          {...item}
                          form={form}
                          mode={mode}
                        />
                      ))
                  }
                ]}
              />
            )}
            {type === 'row' && (
              <RpRow {...props.rowProps}>
                {Array.isArray(props?.items) &&
                  props?.items.map((item, index) => (
                    <RpFormItem
                      key={index}
                      {...item}
                      form={form}
                      mode={mode}
                    />
                  ))}
              </RpRow>
            )}
          </>
        )}
      </AForm.Item>
    </ACol>
  )
}
export default RpFormItem
