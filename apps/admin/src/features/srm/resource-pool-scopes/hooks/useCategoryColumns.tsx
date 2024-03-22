import type { ResourcePoolScopeCategoryVo } from '@raipiot-2f/api'
import type { Updater } from 'use-immer'

interface UseCategoryColumns {
  setCategoryList: Updater<ResourcePoolScopeCategoryVo[]>
}

export const useCategoryColumns = (props: UseCategoryColumns) => {
  const { setCategoryList } = props
  const { createActions, createColumns } = useTableCreator<ResourcePoolScopeCategoryVo>()

  return {
    columns: (isSearch?: boolean) =>
      createColumns([
        { title: '品类编码', dataIndex: 'category' },
        { title: '品类名称', dataIndex: 'name' },
        { title: '品类描述', dataIndex: 'description' },
        ...(isSearch
          ? [
              createActions({
                render: (_, record) => (
                  <RpDeletePopconfirm
                    onConfirm={() =>
                      setCategoryList((draft) => draft.filter((item) => item.id !== record.id))
                    }
                  >
                    <RpButton
                      variant="delete"
                      size="small"
                    />
                  </RpDeletePopconfirm>
                )
              })
            ]
          : [])
      ])
  }
}
