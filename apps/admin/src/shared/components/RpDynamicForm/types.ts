import type {
  ButtonProps,
  CascaderProps,
  ColProps,
  DatePickerProps,
  FormItemProps,
  InputNumberProps,
  InputProps,
  RadioGroupProps,
  SelectProps,
  SwitchProps,
  TimeRangePickerProps,
  TreeSelectProps
} from 'antd'
import type { RangePickerProps } from 'antd/es/date-picker'
import type { TextAreaProps } from 'antd/es/input'
import type { ReactNode } from 'react'

import type { RpUploadProps } from '../RpUpload'

type RpInput = { type: 'input' } & { inputProps?: InputProps }
type RpTextArea = { type: 'text-area' } & { textAreaProps?: TextAreaProps }
type RpRadioGroup = { type: 'radio-group' } & { radioGroupProps?: RadioGroupProps }
type RpSelect = { type: 'select' } & { selectProps?: SelectProps }
type RpTreeSelect = { type: 'tree-select' } & { treeSelectProps?: TreeSelectProps }
type RpCascader = { type: 'cascader' } & { cascaderProps?: CascaderProps }
type RpDatePicker = { type: 'date-picker' } & { datePickerProps?: DatePickerProps }
type RpRangePicker = { type: 'range-picker' } & {
  rangePickerProps?: TimeRangePickerProps | RangePickerProps
}
type RpInputNumber = { type: 'input-number' } & { inputNumberProps?: InputNumberProps }
type RpSwitch = { type: 'switch' } & { switchProps?: SwitchProps }
type RpUpload = { type: 'upload' } & { uploadProps?: RpUploadProps }
type RpButton = { type: 'button' } & { buttonProps?: ButtonProps }
type RpCustomFormItem<T> = {
  type: 'form-item'
  render?: (value?: any, record?: keyof T, index?: number) => ReactNode
}
type RpCustom<T> = { type: 'custom' } & RpCommonFormItemProps & {
    render?: (record?: keyof T, index?: number) => ReactNode
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
        | RpRadioGroup
        | RpSelect
        | RpTreeSelect
        | RpCascader
        | RpDatePicker
        | RpRangePicker
        | RpButton
        | RpCustomFormItem<T>
      ))
  | (RpCustom<T> & RpSearchOnly)

export type RpBasicFormItem<T> =
  | (RpBaseFormItem<T> &
      (
        | RpInput
        | RpTextArea
        | RpRadioGroup
        | RpSelect
        | RpTreeSelect
        | RpCascader
        | RpDatePicker
        | RpRangePicker
        | RpInputNumber
        | RpSwitch
        | RpUpload
        | RpButton
        | RpCustomFormItem<T>
      ))
  | RpCustom<T>
