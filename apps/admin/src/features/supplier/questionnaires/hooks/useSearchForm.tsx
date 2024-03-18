import { rangePresets } from '@/shared/constants'

import { multiOptions, radioOptions } from '../constants'
import type { QuestionnaireSearchFormModel } from '../types'

export const useSearchForm = () => {
  const { createSearchForm } = useFormCreator<QuestionnaireSearchFormModel>()
  const [searchForm] = AForm.useForm()

  return {
    searchForm,
    searchFormItems: createSearchForm([
      {
        type: 'range-picker',
        formItemProps: {
          name: 'createdTime',
          label: '创建日期'
        },
        rangePickerProps: {
          presets: rangePresets,
          showTime: true,
          format: 'YYYY-MM-DD HH:mm'
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'keyword',
          label: '关键字搜索'
        },
        inputProps: {
          placeholder: '请输入供应商编码、名称'
        }
      },
      {
        type: 'select',
        formItemProps: {
          name: 'lifecycle',
          label: '多选字段'
        },
        selectProps: {
          mode: 'multiple',
          options: multiOptions
        }
      },
      {
        type: 'select',
        formItemProps: {
          name: 'radio',
          label: '单选字段'
        },
        selectProps: {
          options: radioOptions
        }
      }
    ])
  }
}
