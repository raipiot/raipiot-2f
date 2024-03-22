import type { ResourcePoolScopeCompanyVo } from '@raipiot-2f/api'
import type { Updater } from 'use-immer'

interface UseCompanyColumns {
  setCompanyList: Updater<ResourcePoolScopeCompanyVo[]>
}

export const useCompanyColumns = (props: UseCompanyColumns) => {
  const { setCompanyList } = props
  const { createActions, createColumns } = useTableCreator<ResourcePoolScopeCompanyVo>()

  return {
    columns: (isSearch?: boolean) =>
      createColumns([
        {
          title: '公司编码',
          dataIndex: 'code'
        },
        {
          title: '公司名称',
          dataIndex: 'name'
        },
        ...(isSearch
          ? [
              createActions({
                render: (_, record) => (
                  <RpDeletePopconfirm
                    onConfirm={() =>
                      setCompanyList((draft) => draft.filter((item) => item.id !== record.id))
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
