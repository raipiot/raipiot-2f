import type { FormItemProps, FormProps } from 'antd'

import type { RpSearchFormItem } from '@/features/form'

export interface RpSearchBarProps<T> extends Omit<FormProps, 'initialValues'> {
  /**
   * 表单初始值
   */
  initialValues?: T
  /**
   * 搜索表单配置项
   */
  formItems?: RpSearchFormItem<T>[]
  /**
   * 搜索加载状态
   */
  searchLoading?: boolean
  /**
   * 搜索事件
   */
  onSearch?: (values: T) => void
  /**
   * 重置事件
   */
  onClear?: (values: T) => void
  /**
   * 显示 Expand 按钮
   */
  showExpand?: boolean
}

function RpSearchBar<T extends Record<string, any>>(props: RpSearchBarProps<T>) {
  const {
    initialValues,
    formItems,
    form,
    searchLoading,
    onSearch,
    onClear,
    showExpand,
    ...formProps
  } = props
  const { t } = useTranslation()
  const { computeResponsiveSpan } = useFormResponsiveSpan()
  const [expand, setExpand] = useState(false)

  return (
    <AForm<T>
      name="search"
      layout="horizontal"
      form={form}
      initialValues={initialValues}
      onFinish={(values) => {
        // 处理搜索事件
        if (onSearch) {
          onSearch(values)
        }
      }}
      {...formProps}
    >
      <ARow gutter={24}>
        {formItems &&
          formItems.map((item) => {
            const { type } = item
            if (type === 'custom') {
              return typeof item.render === 'function' ? item.render() : item.render
            }
            const { key, colProps, formItemProps } = item
            return (
              <ACol
                key={key.toString()}
                {...colProps}
              >
                <AForm.Item
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
                </AForm.Item>
              </ACol>
            )
          })}
        <ACol span={computeResponsiveSpan()}>
          <div className="space-x-2 sm:space-x-4">
            <AButton
              type="primary"
              htmlType="submit"
              loading={searchLoading}
              disabled={searchLoading}
            >
              {t('SEARCH')}
            </AButton>
            <AButton
              onClick={() => {
                if (form) {
                  // 清空表单
                  form.resetFields()
                  // 提交表单
                  form.submit()
                  // 处理清空事件
                  if (onClear) {
                    onClear(form.getFieldsValue())
                  }
                }
              }}
            >
              {t('RESET')}
            </AButton>
            {showExpand && (
              <ATooltip
                title={expand ? t('COLLAPSE') : t('EXPAND')}
                placement="bottom"
              >
                <AButton onClick={() => setExpand(!expand)}>
                  <MaterialSymbolsKeyboardArrowDownRounded
                    className={clsx('transition-all', expand ? 'rotate-180' : 'rotate-0')}
                  />
                </AButton>
              </ATooltip>
            )}
          </div>
        </ACol>
      </ARow>
    </AForm>
  )
}
export default RpSearchBar
