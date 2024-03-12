import type { SystemDictVo } from '@raipiot-2f/api'
import type { FormInstance } from 'antd'
import { isMobile } from 'react-device-detect'

import type { UseModal } from '@/shared/hooks/useModal'

import { useBizDictRemoveMutation } from '../mutations'
import { bizDictQueryOptions } from '../queries'

interface UseBizDictValuesColumnsProps {
  modal?: UseModal<string>
  form?: FormInstance
}

export const useBizDictValuesColumns = (props?: UseBizDictValuesColumnsProps) => {
  const { modal, form } = props ?? {}

  const { t } = useTranslation(['SYSTEM/DICTS', 'COMMON'])
  const { createActions, createColumns } = useTableCreator<SystemDictVo>()

  const { mutateAsync, isPending } = useBizDictRemoveMutation()

  return {
    columns: createColumns<SystemDictVo>([
      {
        title: t('CODE'),
        dataIndex: 'code',
        custom: {
          type: 'tagString',
          tagStringProps: { copyable: true }
        }
      },
      {
        title: t('DICT.VALUE'),
        dataIndex: 'dictValue'
      },
      {
        title: t('COMMON:SORT'),
        dataIndex: 'sort',
        width: 80,
        custom: { type: 'tagString' }
      },
      {
        title: t('COMMON:IS.SEALED'),
        dataIndex: 'isSealed',
        width: 80,
        custom: { type: 'boolean' }
      },
      {
        title: t('COMMON:REMARK'),
        dataIndex: 'remark',
        width: 200,
        ellipsis: { showTitle: false },
        render: (value) => <ATooltip title={value}>{value}</ATooltip>
      },
      createActions({
        width: 250,
        render: (_, record) => (
          <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
            <RpButton
              variant="view"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(bizDictQueryOptions(record.id!))}
              onClick={async () => {
                modal?.openRead()
                modal?.setMeta(record.id)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(bizDictQueryOptions(record.id!))
                )
              }}
            />
            <RpButton
              variant="edit"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(bizDictQueryOptions(record.id!))}
              onClick={async () => {
                modal?.openEdit()
                modal?.setMeta(record.id)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(bizDictQueryOptions(record.id!))
                )
              }}
            />
            <RpButton
              variant="create-child"
              size="small"
              onClick={async () => {
                modal?.openCreate()
                form?.resetFields()
                form?.setFieldsValue({
                  parentId: record.id,
                  code: record.code,
                  parentName: record.dictValue
                })
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
