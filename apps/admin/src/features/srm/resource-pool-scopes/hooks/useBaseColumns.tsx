import type { ResourcePoolScopeVo } from '@raipiot-2f/api'
import { isMobile } from 'react-device-detect'

import { typeMap } from '../maps'
import { useRemoveMutation } from '../mutations'

export const useBaseColumns = () => {
  const { createActions, createColumns } = useTableCreator<ResourcePoolScopeVo>()

  const { mutateAsync, isPending } = useRemoveMutation()

  return {
    columns: createColumns([
      { title: '编码', dataIndex: 'code' },
      {
        title: '资源池类型',
        dataIndex: 'resourcePoolTypeId',
        custom: { formatter: (value) => typeMap.get(value) }
      },
      { title: '资源池名称', dataIndex: 'name' },
      { title: '创建人', dataIndex: 'creatorName' },
      { title: '创建时间', dataIndex: 'createdTime' },
      createActions({
        render: (_, record) => (
          // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
          <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
            <PermCodeProvider code="srm:resource-pool-plans:view">
              <Link
                to="/srm/resource-pool-scopes/$id"
                params={{ id: record.id! }}
              >
                <RpButton
                  variant="view"
                  size="small"
                />
              </Link>
            </PermCodeProvider>
            <PermCodeProvider code="srm:resource-pool-plans:edit">
              <Link
                to="/srm/resource-pool-scopes/$id/edit"
                params={{ id: record.id! }}
              >
                <RpButton
                  variant="edit"
                  size="small"
                />
              </Link>
            </PermCodeProvider>
            <PermCodeProvider code="srm:resource-pool-plans:remove">
              <RpDeletePopconfirm
                okBtnLoading={isPending}
                onConfirm={() => mutateAsync([record.id!])}
              >
                <RpButton
                  variant="delete"
                  size="small"
                />
              </RpDeletePopconfirm>
            </PermCodeProvider>
          </ASpace>
        )
      })
    ])
  }
}
