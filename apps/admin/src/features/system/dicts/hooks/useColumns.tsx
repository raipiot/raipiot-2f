import type { SystemDictVo } from '@raipiot-2f/api'
import { isMobile } from 'react-device-detect'

import { useBaseModalContext } from '../context'
import { useRemoveMutation } from '../mutations'
import { detailQueryOptions } from '../queries'

export const useColumns = () => {
  const { modal, form } = useBaseModalContext()

  const { t } = useTranslation(['SYSTEM/DICTS', 'COMMON'])
  const { createActions, createColumns } = useTableCreator<SystemDictVo>()

  const { mutateAsync, isPending } = useRemoveMutation()

  return {
    columns: createColumns([
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
              onMouseEnter={() => queryClient.prefetchQuery(detailQueryOptions(record.id!))}
              onClick={async () => {
                modal.openRead()
                modal.setMeta(record.id)
                form.setFieldsValue(
                  await queryClient.ensureQueryData(detailQueryOptions(record.id!))
                )
              }}
            />
            <RpButton
              variant="edit"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(detailQueryOptions(record.id!))}
              onClick={async () => {
                modal.openEdit()
                modal.setMeta(record.id)
                form.setFieldsValue(
                  await queryClient.ensureQueryData(detailQueryOptions(record.id!))
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
