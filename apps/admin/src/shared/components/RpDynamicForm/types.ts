import type {
  ButtonProps,
  CascaderProps,
  ColProps,
  DatePickerProps,
  FormItemProps,
  InputNumberProps,
  InputProps,
  SelectProps,
  SwitchProps,
  TreeSelectProps
} from 'antd'
import type { TextAreaProps } from 'antd/es/input'
import type { ReactNode } from 'react'

type RpInput = { type: 'input' } & { inputProps?: InputProps }
type RpTextArea = { type: 'text-area' } & { textAreaProps?: TextAreaProps }
type RpSelect = { type: 'select' } & { selectProps?: SelectProps }
type RpTreeSelect = { type: 'tree-select' } & { treeSelectProps?: TreeSelectProps }
type RpCascader = { type: 'cascader' } & { cascaderProps?: CascaderProps }
type RpDatePicker = { type: 'date-picker' } & { datePickerProps?: DatePickerProps }
type RpInputNumber = { type: 'input-number' } & { inputNumberProps?: InputNumberProps }
type RpSwitch = { type: 'switch' } & { switchProps?: SwitchProps }
type RpButton = { type: 'button' } & { buttonProps?: ButtonProps }
type RpCustomFormItem = { type: 'form-item'; render?: () => ReactNode | ReactNode }
type RpCustom = { type: 'custom' } & RpCommonFormItemProps & {
    render?: () => ReactNode | ReactNode
  }

interface RpFormItemProps<T> extends Omit<FormItemProps, 'name'> {
  name?: keyof T
}

interface RpCommonFormItemProps {
  hidden?: boolean
}

interface RpBaseFormItem<T> extends RpCommonFormItemProps {
  colProps?: ColProps
  formItemProps?: RpFormItemProps<T>
}

interface RpSearchOnly {
  /**
   *  展开时显示
   */
  showExpand?: boolean
}

export type RpSearchFormItem<T> =
  | ((RpBaseFormItem<T> & RpSearchOnly) &
      (
        | RpInput
        | RpTextArea
        | RpSelect
        | RpTreeSelect
        | RpCascader
        | RpDatePicker
        | RpInputNumber
        | RpSwitch
        | RpButton
        | RpCustomFormItem
      ))
  | (RpCustom & RpSearchOnly)

export type RpBasicFormItem<T> =
  | (RpBaseFormItem<T> &
      (
        | RpInput
        | RpTextArea
        | RpSelect
        | RpTreeSelect
        | RpCascader
        | RpDatePicker
        | RpInputNumber
        | RpSwitch
        | RpButton
        | RpCustomFormItem
      ))
  | RpCustom
