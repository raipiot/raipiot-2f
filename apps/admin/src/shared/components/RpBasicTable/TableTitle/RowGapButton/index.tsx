import type { TableProps } from 'antd'

function RowGapButton() {
  const { t } = useTranslation()
  const preferenceStore = usePreferenceStore()

  return (
    <ATooltip
      title={t('ROW.GAP')}
      placement="top"
    >
      <div>
        <ADropdown
          menu={{
            items: [
              { key: 'small', label: t('SMALL') },
              { key: 'middle', label: t('MIDDLE') },
              { key: 'large', label: t('LARGE') }
            ],
            selectable: true,
            selectedKeys: [preferenceStore.tableSize!],
            onSelect: (item) => preferenceStore.setTableSize(item.key as TableProps['size'])
          }}
          placement="bottom"
        >
          <AButton
            className="!flex items-center justify-center"
            shape="circle"
            icon={<MaterialSymbolsCompressRounded />}
          />
        </ADropdown>
      </div>
    </ATooltip>
  )
}
export default RowGapButton
