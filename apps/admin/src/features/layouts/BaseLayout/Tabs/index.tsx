export default function Tabs() {
  const { Layout } = ATheme.useToken().token!
  const tabStore = useTabStore()
  const router = useRouter()
  const navigate = useNavigate()

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove'
  ) => {
    if (action === 'remove' && typeof targetKey === 'string') {
      tabStore.removeRecordByPath(targetKey)
      const historyRecords = tabStore.records
      if (historyRecords.length > 0) {
        const lastRecord = historyRecords.at(-1)
        if (lastRecord) {
          navigate({ to: lastRecord.path })
        }
      }
    }
  }

  const getRouteMeta = (path: string) => router.matchRoutes(path, {}).at(-1)!.staticData ?? {}

  return (
    <ATabs
      className="h-10 border-b border-gray-300 dark:border-gray-950"
      style={{
        backgroundColor: Layout!.headerBg,
        padding: '4px 0 0 8px'
      }}
      tabBarStyle={{
        marginBottom: 0
      }}
      tabPosition="top"
      type="editable-card"
      hideAdd
      activeKey={router.state.location.pathname}
      onEdit={onEdit}
      size="small"
      items={tabStore.records.map(({ path }) => {
        const { title, icon } = getRouteMeta(path)
        return {
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
                            tabStore.clearRecords()
                            tabStore.addRecordByPath(path)
                          }
                        },
                        {
                          label: '关闭所有标签',
                          key: 'close-all',
                          onClick: () => {
                            tabStore.clearRecords()
                            navigate({ to: '/' })
                          }
                        }
                      ]
              }}
            >
              <Link
                className="cursor-pointer !text-inherit"
                to={path}
              >
                <div className="flex items-center space-x-1 text-sm">
                  <div className="mb-0.5">{icon && icon}</div>
                  <span>{I18nUtils.getText(title)}</span>
                </div>
              </Link>
            </ADropdown>
          ),
          key: path,
          closable: path !== '/'
        }
      })}
    />
  )
}
