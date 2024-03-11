import type { ParamVo } from '@raipiot-2f/api'
import type { FormInstance } from 'antd'
import { isMobile } from 'react-device-detect'

import type { UseModal } from '@/shared/hooks/useModal'

import { useParamRemoveMutation } from '../mutations'
import { paramQueryOptions } from '../queries'

interface UseParamsColumnsProps {
  modal?: UseModal<string>
  form?: FormInstance
}

export const useParamsColumns = (props?: UseParamsColumnsProps) => {
  const { modal, form } = props ?? {}

  const { t } = useTranslation(['SYSTEM/PARAMS', 'COMMON'])
  const { createActions, createColumns } = useTableCreator<ParamVo>()

  const { mutateAsync, isPending } = useParamRemoveMutation()

  return {
    columns: createColumns<ParamVo>([
      {
        title: t('PARAMS.NAME'),
        dataIndex: 'paramName',
        custom: { type: 'string' }
      },
      {
        title: t('PARAMS.KEY'),
        dataIndex: 'paramKey',
        width: 80,
        custom: {
          type: 'tagString',
          tagStringProps: { copyable: true }
        }
      },
      {
        title: t('PARAMS.VALUE'),
        dataIndex: 'paramValue',
        width: 200,
        custom: { type: 'string' }
      },
      {
        title: t('COMMON:REMARK'),
        dataIndex: 'remark',
        width: 200,
        ellipsis: { showTitle: false },
        render: (value) => <ATooltip title={value}>{value}</ATooltip>
      },
      createActions({
        width: 200,
        render: (_, record) => (
          // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
          <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
            <RpButton
              variant="view"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(paramQueryOptions(record.id!))}
              onClick={async () => {
                modal?.openRead()
                modal?.setMeta(record.id)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(paramQueryOptions(record.id!))
                )
              }}
            />
            <RpButton
              variant="edit"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(paramQueryOptions(record.id!))}
              onClick={async () => {
                modal?.openEdit()
                modal?.setMeta(record.id)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(paramQueryOptions(record.id!))
                )
              }}
            />
            <RpDeletePopconfirm
              okBtnLoading={isPending}
              onConfirm={() => mutateAsync(record.id!)}
            >
              <RpButton
                variant="delete"
                size="small"
              />
            </RpDeletePopconfirm>
          </ASpace>
        )
      })
    ])
  }
}
