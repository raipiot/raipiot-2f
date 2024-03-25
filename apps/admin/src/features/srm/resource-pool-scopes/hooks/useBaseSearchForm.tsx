import { rangePresets } from '@/shared/constants'

import type { ResourcePoolScopeSearchFormModel } from '../types'

export const useBaseSearchForm = () => {
  const { createSearchForm } = useFormCreator<ResourcePoolScopeSearchFormModel>()
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
        type: 'select',
        formItemProps: {
          name: 'base',
          label: '基地'
        },
        selectProps: {
          options: [
            {
              label: '基地1',
              value: '1'
            },
            {
              label: '基地2',
              value: '2'
            }
          ]
        }
      }
    ])
  }
}
