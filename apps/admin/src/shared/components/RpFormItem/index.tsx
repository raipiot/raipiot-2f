import type { FormItemProps, TreeSelectProps } from 'antd'
import { isEmpty } from 'lodash-es'

import RpDebounceSelect from '../RpDebounceSelect'
import type { RpBasicFormItemProps } from './types'

function findAllLabelInTreeData(
  treeData: TreeSelectProps['treeData'] = [],
  result: { label: string; value: string }[] = [],
  fieldName?: TreeSelectProps['fieldNames']
) {
  treeData?.forEach((item) => {
    result.push({
      label: item[fieldName?.label || 'label'] as string,
      value: item[fieldName?.value || 'value'] as string
    })
    if (item.children?.length) {
      findAllLabelInTreeData(item.children, result, fieldName)
    }
  })
  return result
}

function RpFormItem<T>(props: RpBasicFormItemProps<T>): React.ReactNode {
  const { type, hidden, mode = 'edit' } = props
  const form = AForm.useFormInstance()

  const { t } = useTranslation()
  const span = useResponsiveSpan()

  if (hidden) {
    return null
  }

  if (type === 'custom') {
    return props.render && props.hidden !== true ? props.render() : null
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
        name={formItemProps?.name as FormItemProps['name']}
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
            {/* 新增阅读模式显式的内容 */}
            {type === 'debounce-select' && (props.readModeRender || '-')}
            {type === 'tree-select' && (
              // <ATreeSelect
              //   value={value}
              //   variant="borderless"
              //   suffixIcon={null}
              //   {...props.treeSelectProps}
              //   treeCheckable={false}
              // />
              <AFlex
                wrap="wrap"
                gap={2}
              >
                {[form.getFieldValue(props.formItemProps?.name)].flat().map((item) => {
                  const allItem = findAllLabelInTreeData(
                    props.treeSelectProps?.treeData,
                    [],
                    props.treeSelectProps?.fieldNames
                  )
                  return (
                    <ATag key={item}>
                      {
                        // item 可能存在相同结构的 children，如果存在 children，则需要递归查找
                        allItem.find((i) => item?.toString() === i.value?.toString())?.label ?? '-'
                      }
                    </ATag>
                  )
                })}
              </AFlex>
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
              // 阅读模式，将时间转为日期
              <RpField
                value={value}
                tooltip={{
                  title: Array.isArray(value)
                    ? value
                        .map((item) => DateUtils.dayjs(item).format('YYYY-MM-DD HH:mm:ss'))
                        .join(' ~ ')
                    : DateUtils.dayjs(value).format('YYYY-MM-DD HH:mm:ss'),
                  placement: 'topLeft'
                }}
                formatter={(v) => {
                  // 可能是时间戳或时间范围
                  if (Array.isArray(v)) {
                    return v.map((item) => DateUtils.dayjs(item).format('YYYY-MM-DD'))
                  }
                  return !isEmpty(v) && DateUtils.dayjs(v)
                    ? DateUtils.dayjs(v).format('YYYY-MM-DD')
                    : '-'
                }}
              />
            )}
            {type === 'form-item' && (props.render ? props.render(value, record) : null)}
            {type === 'collapse' && <RpFormCollapseItem {...props.collapseProps} />}
          </>
        ) : (
          <>
            {type === 'input' && <AInput {...props.inputProps} />}
            {type === 'text-area' && <AInput.TextArea {...props.textAreaProps} />}
            {type === 'radio-group' && <ARadio.Group {...props.radioGroupProps} />}
            {type === 'checkbox' && <ACheckbox {...props.checkboxProps} />}
            {type === 'checkbox-group' && <ACheckbox.Group {...props.checkboxGroupProps} />}
            {type === 'select' && <ASelect {...props.selectProps} />}
            {type === 'debounce-select' && <RpDebounceSelect {...props.debounceSelectProps} />}
            {type === 'autoComplete' && <AAutoComplete {...props.autoCompleteProps} />}
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
            {type === 'collapse' && <RpFormCollapseItem {...props.collapseProps} />}
            {type === 'collapse-item' && (
              <ACollapse
                {...props.collapseItemProps}
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
