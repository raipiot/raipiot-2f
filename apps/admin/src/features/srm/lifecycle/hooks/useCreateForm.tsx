import type { LifecycleSupplierApplyVO } from '@raipiot-2f/api'
import { LifecycleStage } from '@raipiot-2f/api'

import { lifecycleApplicationFormOptions, lifecycleOptions } from '../const'

export const useCreateForm = ({
  isDetail,
  isUpgrade,
  targetStage
}: {
  isDetail?: boolean
  isUpgrade?: boolean
  targetStage?: string
}) => {
  const { createModalForm } = useFormCreator<LifecycleSupplierApplyVO>()

  const [form] = AForm.useForm()
  const enableBlackList = AForm.useWatch('enableBlackList', form)
  return {
    form,
    formItems: createModalForm([
      {
        type: 'input',
        formItemProps: {
          label: '申请编号',
          name: 'applyCode'
        },
        inputProps: {
          readOnly: true,
          variant: 'borderless'
        },
        hidden: !isDetail
      },
      {
        type: 'input',
        formItemProps: {
          name: 'supplierCode',
          label: '供应商编码'
        },
        inputProps: {
          readOnly: true,
          variant: 'borderless'
        }
      },
      {
        type: 'select',
        formItemProps: {
          name: 'supplierName',
          label: '供应商名称'
        },
        selectProps: {
          suffixIcon: null,
          variant: 'borderless',
          options: lifecycleOptions
        },
        hidden: !isDetail
      },
      {
        type: 'select',
        formItemProps: {
          name: 'currentStage',
          label: '当前阶段'
        },
        selectProps: {
          suffixIcon: null,
          variant: 'borderless',
          options: lifecycleOptions
        },
        hidden: !isDetail
      },
      {
        type: 'input',
        formItemProps: {
          name: 'targetStage',
          label: '目标阶段'
        },
        inputProps: {
          readOnly: true,
          variant: 'borderless'
        },
        hidden: isUpgrade || !isDetail
      },
      {
        type: 'input',
        formItemProps: {
          name: 'creatorName',
          label: '创建人'
        },
        inputProps: {
          readOnly: true,
          variant: 'borderless'
        },
        hidden: !isDetail
      },
      {
        type: 'input',
        formItemProps: {
          name: 'createTime',
          label: '创建时间'
        },
        inputProps: {
          readOnly: true,
          variant: 'borderless'
        },
        hidden: !isDetail
      },
      {
        type: 'input',
        formItemProps: {
          name: 'base',
          label: '所在基地'
        },
        inputProps: {
          readOnly: true,
          variant: 'borderless'
        },
        hidden: !isDetail
      },
      {
        type: 'select',
        formItemProps: {
          name: 'status',
          label: '状态'
        },
        selectProps: {
          options: lifecycleApplicationFormOptions,
          placeholder: '请选择',
          variant: 'borderless',
          suffixIcon: null
        },
        hidden: isUpgrade || !isDetail
      },
      // {
      //   type: 'select',
      //   formItemProps: {
      //     name: 'status',
      //     label: '状态'
      //   },
      //   selectProps: {
      //     options: [
      //       { label: '未降级', value: '0' },
      //       { label: '已降级', value: '1' }
      //     ],
      //     placeholder: '请选择'
      //   },
      //   hidden: !isUpgrade
      // },
      {
        type: 'switch',
        formItemProps: {
          name: 'enableBlackList',
          label: '是否加入黑名单'
        },
        // 仅淘汰阶段可见
        hidden: targetStage !== LifecycleStage.DISUSE
      },
      {
        type: 'switch',
        formItemProps: {
          name: 'foreverBlackList',
          label: '永久黑名单'
        },
        // 仅淘汰阶段可见
        hidden: targetStage !== LifecycleStage.DISUSE || enableBlackList
      },
      {
        type: 'date-picker',
        formItemProps: {
          name: 'blackListInvalidTime',
          label: '黑名单失效时间'
        },
        // 仅淘汰阶段可见
        hidden: targetStage !== LifecycleStage.DISUSE || enableBlackList
      },
      {
        type: 'text-area',
        formItemProps: {
          name: 'blackListReason',
          label: '黑名单原因'
        },
        textAreaProps: {
          rows: 4,
          placeholder: '请输入说明内容',
          maxLength: 200,
          showCount: true
        },
        colProps: {
          span: 24
        },
        // 仅淘汰阶段可见
        hidden: targetStage !== LifecycleStage.DISUSE || enableBlackList
      },
      {
        type: 'text-area',
        formItemProps: {
          name: 'description',
          label: '说明',
          rules: [{ required: true, message: '请输入说明内容' }]
        },
        textAreaProps: {
          rows: 4,
          placeholder: '请输入说明内容',
          maxLength: 200,
          showCount: true
        },
        colProps: {
          span: 24
        }
      }
    ])
  }
}
