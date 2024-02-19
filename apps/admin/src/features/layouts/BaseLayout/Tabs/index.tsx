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
      // 切换至上一个 Tab
      const historyRecords = tabStore.records
      if (historyRecords.length > 0) {
        const lastRecord = historyRecords.at(-1)
        if (lastRecord) {
          navigate({ to: lastRecord.path })
        }
      }
    }
  }

  const generateTitle = (path: string) => {
    const item = router.matchRoutes(path, {})
    const { title } = item.at(-1)!.staticData
    return I18nUtils.getText(title)
  }

  return (
    <ATabs
      className="border-b border-gray-300 dark:border-gray-950"
      style={{
        backgroundColor: Layout!.headerBg,
        padding: '8px 0 0 8px'
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
      items={tabStore.records.map(({ path }) => ({
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
                          tabStore.addRecord({
                            path,
                            active: true
                          })
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
