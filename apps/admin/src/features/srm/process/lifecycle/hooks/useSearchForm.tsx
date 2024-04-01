import type { LifecycleSearchFormModel } from '../types'
import { useStatuSelectOption } from './useStatuSelectOption'

export const useSearchForm = () => {
  const { createSearchForm } = useFormCreator<LifecycleSearchFormModel>()
  const [form] = AForm.useForm()
  const statusOptions = useStatuSelectOption()

  return {
    form,
    formItems: createSearchForm([
      {
        type: 'range-picker',
        formItemProps: {
          label: '日期范围',
          name: 'dateRange'
        },
        rangePickerProps: {
          allowClear: true
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'keyword',
          label: '供应商'
        },
        inputProps: {
          placeholder: '请输入供应商名称或编码'
        }
      },
      {
        type: 'select',
        formItemProps: {
          name: 'currentStage',
          label: '当前状态'
        },
        selectProps: {
          options: statusOptions,
          placeholder: '请选择'
        }
      },
      {
        type: 'select',
        formItemProps: {
          name: 'targetStage',
          label: '目标状态'
        },
        selectProps: {
          options: [
            { label: '红牌', value: '1' },
            { label: '绿牌', value: '2' },
            { label: '黄牌', value: '3' },
            { label: '待定', value: '4' }
          ],
          placeholder: '请选择'
        }
      }
    ])
  }
}
