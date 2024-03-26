import { QueryDimension } from '@raipiot-2f/api'

import type { SupplierSearchFormModel } from '@/features/srm/supplier-black-list/types'

export const useSearchForm = () => {
  const { createSearchForm } = useFormCreator<SupplierSearchFormModel>()
  const [form] = AForm.useForm()

  return {
    form,
    formItems: createSearchForm([
      {
        type: 'select',
        formItemProps: {
          name: 'queryDimension',
          label: '查询维度'
        },
        selectProps: {
          options: [
            { label: '供应商 + 基地', value: QueryDimension.SUPPLIER_BASE },
            { label: '供应商 + 基地 + 品类', value: QueryDimension.SUPPLIER_BASE_CATEGORY },
            {
              label: '供应商 + 基地 + 品类 + 物料',
              value: QueryDimension.SUPPLIER_BASE_CATEGORY_MATERIAL
            }
          ],
          allowClear: true
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'companyName',
          label: '供应商'
        },
        inputProps: {
          placeholder: '请输入供应商编码、名称'
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'baseId',
          label: '基地'
        },
        inputProps: {
          placeholder: '请输入基地编码、名称'
        }
      },
      {
        type: 'select',
        formItemProps: {
          name: 'lifecycleStageList',
          label: '生命周期'
        },
        selectProps: {
          options: [
            { label: '注册', value: '1' },
            { label: '潜在', value: '2' },
            { label: '推荐', value: '3' },
            { label: '合格', value: '4' },
            { label: '淘汰', value: '5' }
          ],
          mode: 'multiple',
          allowClear: true
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'material',
          label: '物料'
        }
      },
      {
        showExpand: true,
        type: 'select',
        formItemProps: {
          name: 'categoryState',
          label: '品类阶段'
        },
        selectProps: {
          options: [
            { label: '红牌', value: '1' },
            { label: '绿牌', value: '2' },
            { label: '黄牌', value: '3' },
            { label: '待定', value: '4' }
          ],
          allowClear: true
        }
      }
    ])
  }
}
