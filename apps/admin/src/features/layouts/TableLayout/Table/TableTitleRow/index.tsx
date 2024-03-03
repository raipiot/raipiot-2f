import { TableLayoutPropsContext } from '../../context'
import FullScreenButton from './FullScreenButton'
import RefreshButton from './RefreshButton'
import RowGapButton from './RowGapButton'

export default function TableTitleRow() {
  const { t } = useTranslation()
  const tableLayoutProps = useContext(TableLayoutPropsContext)

  const selectedRowKeys = tableLayoutProps.tableProps?.rowSelection?.selectedRowKeys
  const hadSelected = (selectedRowKeys?.length ?? 0) > 0

  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-2 sm:space-x-4">
        {hadSelected ? (
          <>
            <APopconfirm
              title={t('BATCH.DELETE')}
              description={t('OPERATION.CONFIRMATION')}
              okText={t('CONFIRM')}
              cancelText={t('CANCEL')}
              okButtonProps={{
                loading: tableLayoutProps.batchDeleteLoading,
                disabled: tableLayoutProps.batchDeleteLoading
              }}
              cancelButtonProps={{ disabled: tableLayoutProps.batchDeleteLoading }}
              onConfirm={() => tableLayoutProps.onBatchDelete?.(selectedRowKeys!)}
            >
              <AButton>{t('BATCH.DELETE')}</AButton>
            </APopconfirm>
            {tableLayoutProps.renderTableBatchOpeate && tableLayoutProps.renderTableBatchOpeate}
            <span className="text-xs sm:text-sm">
              {t('ALREADY.SELECTED', { count: selectedRowKeys!.length })}
            </span>
          </>
        ) : (
          <>{tableLayoutProps.renderTableOpeate && tableLayoutProps.renderTableOpeate}</>
        )}
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        <RefreshButton />
        <RowGapButton />
        <FullScreenButton />
      </div>
    </div>
  )
}
