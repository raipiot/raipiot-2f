import { lifecycleOptions } from '../const'
import type { ApplicationFormSearchFormModel, LifecycleSearchFormModel } from '../types'

export const useSearchForm = (isApplicationForm?: boolean) => {
  const { createSearchForm } = useFormCreator<
    LifecycleSearchFormModel & ApplicationFormSearchFormModel
  >()
  const [form] = AForm.useForm()
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
          options: lifecycleOptions,
          placeholder: '请选择'
        },
        hidden: isApplicationForm
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
        },
        hidden: isApplicationForm
      },
      {
        type: 'select',
        formItemProps: {
          name: 'status',
          label: '状态'
        },
        selectProps: {
          options: [
            { label: '未降级', value: '0' },
            { label: '已降级', value: '1' }
          ],
          placeholder: '请选择'
        },
        hidden: !isApplicationForm
      }
    ])
  }
}
