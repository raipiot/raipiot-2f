import type { DictVo } from '@raipiot-2f/api'
import type { FormInstance } from 'antd'
import { isMobile } from 'react-device-detect'

import type { UseModal } from '@/shared/hooks/useModal'

import { useSystemDictRemoveMutation } from '../mutations'
import { systemDictQueryOptions } from '../queries'

interface UseDictsColumnsProps {
  modal?: UseModal<string>
  form?: FormInstance
}

export const useDictsColumns = (props?: UseDictsColumnsProps) => {
  const { modal, form } = props ?? {}

  const { t } = useTranslation(['SYSTEM/DICTS', 'COMMON'])
  const { createActions, createColumns } = useTableCreator<DictVo>()

  const { mutateAsync, isPending } = useSystemDictRemoveMutation()

  return {
    columns: createColumns<DictVo>([
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
          // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
          <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
            <RpButton
              variant="view"
              size="small"
              onClick={() => {
                modal?.openRead()
                modal?.setMeta(record.id)
              }}
            />
            <RpButton
              variant="edit"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(systemDictQueryOptions(record.id!))}
              onClick={async () => {
                modal?.openEdit()
                modal?.setMeta(record.id)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(systemDictQueryOptions(record.id!))
                )
              }}
            />
            <Link
              to="/system/dicts/$id"
              params={{ id: record.id! }}
            >
              <RpButton
                variant="config"
                size="small"
              />
            </Link>
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
