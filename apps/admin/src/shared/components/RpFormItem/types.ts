import type {
  AutoCompleteProps,
  ButtonProps,
  CascaderProps,
  CheckboxProps,
  CollapseProps,
  ColProps,
  DatePickerProps,
  FormInstance,
  FormItemProps,
  InputNumberProps,
  InputProps,
  RadioGroupProps,
  RowProps,
  SelectProps,
  SwitchProps,
  TimeRangePickerProps,
  TreeSelectProps
} from 'antd'
import type { CheckboxGroupProps } from 'antd/es/checkbox'
import type { RangePickerProps } from 'antd/es/date-picker'
import type { TextAreaProps } from 'antd/es/input'
import type { ReactNode } from 'react'

import type { ModalType } from '@/shared/hooks/useModal'

import type { DebounceSelectProps } from '../RpDebounceSelect'
import type { RpUploadProps } from '../RpUpload'
import type { RpFormCollapseItemProps } from './RpFormCollapseItem'

interface RpFormItemProps<T> extends Omit<FormItemProps, 'name'> {
  name?: keyof T
}

interface RpBaseItem {
  /**
   * 是否隐藏
   */
  hidden?: boolean
  /**
   * 表单
   */
  form?: FormInstance
  /**
   * 类型
   */
  mode?: ModalType
  /**
   * read 模式时渲染的内容
   */
  readModeRender?: (value?: any, record?: any, index?: number) => ReactNode
}

interface RpSearchBaseItem {
  /**
   *  展开时显示
   */
  showExpand?: boolean
}

interface RpBaseContainerItem<T> extends RpBaseItem {
  items?: RpBasicFormItemProps<T>[]
}

interface RpBaseFormItem<T> extends RpBaseItem {
  colProps?: ColProps
  formItemProps?: RpFormItemProps<T>
}

interface RpSearchBaseFormItem<T> extends RpBaseFormItem<T>, RpSearchBaseItem {}

interface RpCollapseItemProps extends CollapseProps {
  label?: ReactNode
}

type PropsWithType<T extends string, D = object> = { type: T } & D

type RpInput = PropsWithType<'input', { inputProps?: InputProps }>
type RpInputNumber = PropsWithType<'input-number', { inputNumberProps?: InputNumberProps }>
type RpTextArea = PropsWithType<'text-area', { textAreaProps?: TextAreaProps }>
type RpRadioGroup = PropsWithType<'radio-group', { radioGroupProps?: RadioGroupProps }>
type RpCheckbox = PropsWithType<'checkbox', { checkboxProps?: CheckboxProps }>
type RpCheckboxGroup = PropsWithType<'checkbox-group', { checkboxGroupProps?: CheckboxGroupProps }>
type RpSwitch = PropsWithType<'switch', { switchProps?: SwitchProps }>
type RpSelect = PropsWithType<'select', { selectProps?: SelectProps }>
type RpDebounceSelect = PropsWithType<
  'debounce-select',
  { debounceSelectProps: DebounceSelectProps }
>
type RpAutoComplete = PropsWithType<'autoComplete', { autoCompleteProps?: AutoCompleteProps }>
type RpTreeSelect = PropsWithType<'tree-select', { treeSelectProps?: TreeSelectProps }>
type RpCascader = PropsWithType<'cascader', { cascaderProps?: CascaderProps }>
type RpDatePicker = PropsWithType<'date-picker', { datePickerProps?: DatePickerProps }>
type RpRangePicker = PropsWithType<
  'range-picker',
  { rangePickerProps?: TimeRangePickerProps | RangePickerProps }
>
type RpUpload = PropsWithType<'upload', { uploadProps?: RpUploadProps }>
type RpButton = PropsWithType<'button', { buttonProps?: ButtonProps }>
type RpCollapse<T> = PropsWithType<'collapse', { collapseProps?: RpFormCollapseItemProps<T> }>
type RpGroup<T> = PropsWithType<'group', RpBaseContainerItem<T>>
type RpCollapseItem<T> = PropsWithType<
  'collapse-item',
  { collapseItemProps?: RpCollapseItemProps } & RpBaseContainerItem<T>
>
type RpRow<T> = PropsWithType<'row', { rowProps?: RowProps } & RpBaseContainerItem<T>>
type RpCustomFormItem<T> = PropsWithType<
  'form-item',
  { render?: (value?: any, record?: keyof T, index?: number) => ReactNode }
>
type RpCustom<T> = PropsWithType<
  'custom',
  RpBaseItem & { render?: (record?: keyof T, index?: number) => ReactNode }
>
type RpSearchCustom<T> = RpCustom<T> & RpSearchBaseItem

export type RpBasicFormItemProps<T> =
  | (RpBaseFormItem<T> &
      (
        | RpInput
        | RpInputNumber
        | RpTextArea
        | RpRadioGroup
        | RpCheckbox
        | RpCheckboxGroup
        | RpSelect
        | RpDebounceSelect
        | RpTreeSelect
        | RpCascader
        | RpDatePicker
        | RpRangePicker
        | RpSwitch
        | RpUpload
        | RpButton
        | RpCollapse<T>
        | RpCollapseItem<T>
        | RpGroup<T>
        | RpRow<T>
        | RpCustomFormItem<T>
        | RpAutoComplete
      ))
  | RpCustom<T>

export type RpSearchFormItemProps<T> =
  | (RpSearchBaseFormItem<T> &
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
  | RpSearchCustom<T>
