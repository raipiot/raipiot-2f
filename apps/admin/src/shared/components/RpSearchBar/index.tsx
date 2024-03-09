import type { CardProps, FormItemProps, FormProps } from 'antd'

import type { RpSearchFormItem } from '@/shared/components/RpFormItem/types'

import rpWithCard from '../RpWithCard'

export interface RpSearchBarProps<T> {
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
   * 预渲染事件
   */
  onPrefetch?: (values: T) => void
  /**
   * 显示 Expand 按钮
   */
  showExpand?: boolean
  /**
   * 表单属性
   */
  formProps?: Omit<FormProps, 'initialValues'> & { initialValues?: T }
  /**
   * Card 属性
   */
  cardProps?: CardProps
  /**
   * 隐藏卡片
   * @default false
   */
  hideCard?: boolean
}

type RpSearchBarComponent = <T extends Record<string, any>>(
  props: RpSearchBarProps<T>
) => JSX.Element

const RpSearchBar: RpSearchBarComponent = rpWithCard(
  <T extends Record<string, any>>(props: RpSearchBarProps<T>) => {
    const { formItems, searchLoading, onSearch, onClear, onPrefetch, showExpand, formProps } =
      props ?? {}
    const { form, initialValues } = formProps ?? {}
    const { t } = useTranslation()
    const span = useResponsiveSpan()
    const [expand, setExpand] = useState(false)

    // 预渲染
    const prefetch = () => onPrefetch?.(form?.getFieldsValue(true))

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
          <RpCol span={span}>
            <div className="space-x-2 sm:space-x-4">
              <RpButton
                variant="search"
                htmlType="submit"
                loading={searchLoading}
                disabled={searchLoading}
                onMouseEnter={prefetch}
              />
              <RpButton
                variant="reset"
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
              />
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
          </RpCol>
        </RpRow>
      </AForm>
    )
  }
)
export default RpSearchBar
