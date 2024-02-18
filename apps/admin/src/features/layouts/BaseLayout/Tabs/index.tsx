export default function Tabs() {
  const { Layout } = ATheme.useToken().token!

  const { records } = useTabRecordStore()
  const routeState = useRouterState()
  const navigate = useNavigate()

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove'
  ) => {
    if (action === 'remove' && typeof targetKey === 'string') {
      useTabRecordStore.getState().removeRecordByPath(targetKey)
      // switch to previous tab
      const historyRecords = useTabRecordStore.getState().records
      if (historyRecords.length > 0) {
        const lastRecord = historyRecords.at(-1)
        if (lastRecord) {
          navigate({
            to: lastRecord.path
          })
        }
      }
    }
  }

  const router = useRouter()
  const generateTitle = (path: string) => {
    const item = router.matchRoutes(path, {})
    const { title } = item.at(-1)!.staticData
    return I18nUtils.getText(title)
  }

  return (
    <ATabs
      className="w-full border-[1px] border-gray-50 bg-gray-200 dark:border-gray-950"
      tabPosition="top"
      type="editable-card"
      hideAdd
      activeKey={routeState.location.pathname}
      onEdit={onEdit}
      style={{
        backgroundColor: Layout!.headerBg,
        padding: '12px 0 0 12px'
      }}
      size="small"
      items={records.map(({ path }) => ({
        label: (
          <ADropdown
            key={path}
            trigger={['contextMenu']}
            menu={{
              items:
                path === '/'
                  ? []
                  : [
                      {
                        label: '关闭其他标签',
                        key: 'close-others',
                        onClick: () => {
                          useTabRecordStore.getState().clearRecords()
                          useTabRecordStore.getState().addRecord({
                            path,
                            active: true
                          })
                        }
                      },
                      {
                        label: '关闭所有标签',
                        key: 'close-all',
                        onClick: () => {
                          useTabRecordStore.getState().clearRecords()
                          navigate({
                            to: '/'
                          })
                        }
                      }
                    ]
            }}
          >
            <Link
              className="cursor-pointer p-2 !text-inherit"
              to={path}
            >
              {generateTitle(path)}
            </Link>
          </ADropdown>
        ),
        key: path,
        closable: path !== '/'
      }))}
    />
  )
}
