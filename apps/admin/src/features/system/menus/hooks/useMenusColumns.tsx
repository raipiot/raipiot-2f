import type { MenuVo } from '@raipiot-2f/api'
import type { FormInstance } from 'antd'
import { isMobile } from 'react-device-detect'

import type { UseModal } from '@/shared/hooks/useModal'

import { useMenuRemoveMutation } from '../mutations'
import { menuQueryOptions } from '../queries'

interface UseMenusColumnsProps {
  modal?: UseModal<string>
  form?: FormInstance
}

export const useMenusColumns = (props?: UseMenusColumnsProps) => {
  const { modal, form } = props ?? {}

  const { t } = useTranslation(['SYSTEM/MENUS', 'COMMON'])
  const { createActions, createColumns } = useTableCreator<MenuVo>()

  const { mutateAsync, isPending } = useMenuRemoveMutation()

  return {
    columns: createColumns([
      {
        title: t('NAME'),
        dataIndex: 'name',
        custom: { type: 'string' }
      },
      {
        title: t('CODE'),
        dataIndex: 'code',
        custom: { type: 'string' }
      },
      {
        title: t('ROUTER.URL'),
        dataIndex: 'path',
        custom: { type: 'string' }
      },
      {
        title: t('ICON'),
        dataIndex: 'source',
        ellipsis: { showTitle: false },
        render: (value) => <ATooltip title={value}>{value}</ATooltip>
      },
      {
        title: t('ALIAS'),
        dataIndex: 'alias',
        custom: { type: 'string' }
      },
      {
        title: t('IS.OUTER.LINK'),
        dataIndex: 'isOpen',
        width: 80,
        custom: { type: 'boolean' }
      },
      {
        title: t('COMMON:SORT'),
        dataIndex: 'sort',
        width: 80,
        custom: { type: 'tagString' }
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
              onMouseEnter={() => queryClient.prefetchQuery(menuQueryOptions(record.id!))}
              onClick={async () => {
                modal?.openRead()
                modal?.setMeta(record.id)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(menuQueryOptions(record.id!))
                )
              }}
            />
            <RpButton
              variant="edit"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(menuQueryOptions(record.id!))}
              onClick={async () => {
                modal?.openEdit()
                modal?.setMeta(record.id)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(menuQueryOptions(record.id!))
                )
              }}
            />
            <RpButton
              variant="add-child"
              size="small"
              onClick={async () => {
                modal?.openCreate()
                modal?.setMeta(record.id)
                form?.resetFields()
                form?.setFieldValue('parentId', record.id)
              }}
            />
            <RpDeletePopconfirm
              okBtnLoading={isPending}
              onConfirm={() => {
                mutateAsync(record.id!)
              }}
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
