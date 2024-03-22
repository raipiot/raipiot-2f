import type { ResourcePoolScopeVo } from '@raipiot-2f/api'
import { isMobile } from 'react-device-detect'

import { useRemoveMutation } from '../mutations'

export const useBaseColumns = () => {
  const { createActions, createColumns } = useTableCreator<ResourcePoolScopeVo>()

  const { mutateAsync, isPending } = useRemoveMutation()

  return {
    columns: createColumns([
      {},
      createActions({
        render: (_, record) => (
          // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
          <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
            <RpButton
              variant="view"
              size="small"
              onMouseEnter={() =>
                queryClient.prefetchQuery(ResourcePoolScopes.detailQO(record.id!))
              }
              onClick={() => {}}
            />
            <RpButton
              variant="edit"
              size="small"
            />
            <RpDeletePopconfirm
              okBtnLoading={isPending}
              onConfirm={() => mutateAsync([record.id!])}
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
