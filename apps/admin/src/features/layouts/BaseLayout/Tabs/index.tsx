export default function Tabs() {
  const { t } = useTranslation()
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
      className="border-b border-gray-300 dark:border-gray-950"
      style={{
        backgroundColor: Layout!.headerBg,
        paddingTop: 4,
        borderBottom: 0
      }}
      tabBarStyle={{
        marginBottom: 0,
        height: 36,
        paddingLeft: 4
      }}
      tabBarGutter={4}
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
                          label: t('CLOSE.OTHER.TAGS'),
                          key: 'close-others',
                          onClick: () => {
                            tabStore.clearRecords()
                            tabStore.addRecordByPath(path)
                          }
                        },
                        {
                          label: t('CLOSE.ALL.TAGS'),
                          key: 'close-all',
                          onClick: () => {
                            tabStore.clearRecords()
                            navigate({ to: '/dashboard' })
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
