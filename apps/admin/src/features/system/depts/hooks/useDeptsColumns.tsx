import type { DeptVo } from '@raipiot-2f/api'
import type { FormInstance } from 'antd'
import { isMobile } from 'react-device-detect'

import type { UseModal } from '@/shared/hooks/useModal'

import { tenantsQueryOptions } from '../../tenants'
import { useDeptsRemoveMutation } from '../mutations'
import { deptQueryOptions } from '../queries'

interface UseDeptsColumnsProps {
  modal?: UseModal<string>
  form?: FormInstance
}

export const useDeptsColumns = (props?: UseDeptsColumnsProps) => {
  const { modal, form } = props ?? {}

  const { t } = useTranslation(['SYSTEM/DEPTS', 'COMMON'])
  const { createActions, createColumns } = useTableCreator<DeptVo>()

  const { mutateAsync, isPending } = useDeptsRemoveMutation()
  const {
    data: { records }
  } = useSuspenseQuery(tenantsQueryOptions({ current: 1, size: 1000 }))

  return {
    columns: createColumns<DeptVo>([
      {
        title: t('NAME'),
        dataIndex: 'deptName'
      },
      {
        title: t('TENANT'),
        dataIndex: 'tenantId',
        render: (value) => (
          <RpTagString value={records.find((i) => i.tenantId === value)?.tenantName ?? '-'} />
        )
      },
      {
        title: t('FULLNAME'),
        dataIndex: 'fullName'
      },
      {
        title: t('TYPE'),
        dataIndex: 'deptCategoryName',
        render: (value) => <RpTagString value={value} />
      },
      {
        title: t('SORT'),
        dataIndex: 'sort',
        width: 60
      },
      {
        title: t('COMMON:REMARK'),
        dataIndex: 'remark',
        width: 200,
        ellipsis: { showTitle: false },
        render: (value) => <ATooltip title={value}>{value}</ATooltip>
      },
      createActions({
        width: 140,
        render: (_, record) => (
          // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
          <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
            <RpButton
              variant="view"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(deptQueryOptions(record.id!))}
              onClick={async () => {
                modal?.openRead()
                modal?.setMeta(record.id!)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(deptQueryOptions(record.id!))
                )
              }}
            />
            <RpButton
              variant="edit"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(deptQueryOptions(record.id!))}
              onClick={async () => {
                modal?.openEdit()
                modal?.setMeta(record.id!)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(deptQueryOptions(record.id!))
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
