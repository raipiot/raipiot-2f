export default function Tabs() {
  const { headerBg } = ATheme.useToken().token.Layout!
  const { records } = useTabRecordStore()
  const routeState = useRouterState()
  const navigate = useNavigate()

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove'
  ) => {
    if (action === 'remove' && typeof targetKey === 'string') {
      useTabRecordStore.getState().removeRecordByKey(targetKey)
      // switch to previous tab
      const historyRecords = useTabRecordStore.getState().records
      if (historyRecords.length > 0) {
        const lastRecord = historyRecords.at(-1)
        if (lastRecord) {
          navigate({
            to: lastRecord.key
          })
        }
      }
    }
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
        backgroundColor: headerBg,
        padding: '12px 0 0 12px'
      }}
      size="small"
      items={records.map(({ key, name }) => ({
        label: (
          <ADropdown
            key={key}
            trigger={['contextMenu']}
            menu={{
              items:
                key === '/'
                  ? []
                  : [
                      {
                        label: I18nUtils.getText('关闭其他标签'),
                        key: 'close-others',
                        onClick: () => {
                          useTabRecordStore.getState().clearRecords()
                          useTabRecordStore.getState().addRecord({
                            key,
                            name,
                            active: true
                          })
                        }
                      },
                      {
                        label: I18nUtils.getText('关闭所有标签'),
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
              className="cursor-pointer p-2 !text-gray-500 [&.active]:!text-blue-600"
              to={key}
            >
              {I18nUtils.getText(name)}
            </Link>
          </ADropdown>
        ),
        key,
        closable: key !== '/'
      }))}
    />
  )
}
