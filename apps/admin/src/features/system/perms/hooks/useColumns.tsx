import type { MenuVo, ScopeTypeString } from '@raipiot-2f/api'

interface UseColumns {
  type: ScopeTypeString
}

export const useColumns = ({ type }: UseColumns) => {
  const { createColumns, createActions } = useTableCreator<MenuVo>()

  const { t } = useTranslation(['SYSTEM/MENUS', 'SYSTEM/PERMS'])

  return {
    columns: createColumns([
      {
        title: t('NAME'),
        dataIndex: 'name'
      },
      {
        title: t('ROUTER.URL'),
        dataIndex: 'path'
      },
      {
        title: t('CODE'),
        dataIndex: 'code'
      },
      {
        title: t('ALIAS'),
        dataIndex: 'alias'
      },
      {
        title: t('SYSTEM/PERMS:SORT'),
        dataIndex: 'sort'
      },
      createActions({
        width: 120,
        render: (_, record) => (
          <ASpace>
            <Link
              to="/system/perms/$id"
              params={{ id: record.id! }}
              search={(prev) => ({ ...prev, type, menuName: record.name })}
            >
              <AFlex
                gap={4}
                align="center"
              >
                <MaterialSymbolsSettingsApplicationsOutlineRounded />
                <span>{t('SYSTEM/PERMS:PERMS.CONFIG')}</span>
              </AFlex>
            </Link>
          </ASpace>
        )
      })
    ])
  }
}
