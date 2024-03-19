import type { ScopeTypeString, ScopeVo } from '@raipiot-2f/api'
import { isMobile } from 'react-device-detect'

import { useScopeConfigContext } from '../contexts'
import { scopePermissionQueryOptions } from '../queries'

export const useScopeColumns = (props: { type: ScopeTypeString }) => {
  const { t } = useTranslation(['SYSTEM/PERMS'])

  const { modal, form } = useScopeConfigContext()

  const { createActions, createColumns } = useTableCreator<ScopeVo>()

  const { mutateAsync, isPending } = Perms.useScopeRemoveMutation()

  return {
    columns: createColumns([
      {
        title: t('PERMS.NAME'),
        dataIndex: 'scopeName'
      },
      {
        title: t('PERMS.RESOURCE.CODE'),
        dataIndex: 'resourceCode'
      },
      {
        title: t('PERMS.FIELD'),
        dataIndex: 'scopeField'
      },
      {
        title: t('RULE.NAME'),
        dataIndex: 'scopeTypeName',
        width: 100
      },
      createActions({
        width: 150,
        render: (_, record) => (
          // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
          <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
            <RpButton
              variant="view"
              size="small"
              onMouseEnter={() =>
                queryClient.prefetchQuery(
                  scopePermissionQueryOptions(record.id!, props.type ?? 'api')
                )
              }
              onClick={async () => {
                modal?.openRead()
                modal?.setMeta(record.id)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(
                    scopePermissionQueryOptions(record.id, props.type ?? 'api')
                  )
                )
              }}
            />
            <RpButton
              variant="edit"
              size="small"
              onMouseEnter={() =>
                queryClient.prefetchQuery(
                  scopePermissionQueryOptions(record.id!, props.type ?? 'api')
                )
              }
              onClick={async () => {
                modal?.openEdit()
                modal?.setMeta(record.id)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(
                    scopePermissionQueryOptions(record.id, props.type ?? 'api')
                  )
                )
              }}
            />
            <RpDeletePopconfirm
              okBtnLoading={isPending}
              onConfirm={() =>
                mutateAsync({
                  id: record.id,
                  type: props.type ?? 'api'
                })
              }
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
