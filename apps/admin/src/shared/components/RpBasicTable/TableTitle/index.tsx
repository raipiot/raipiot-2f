import type { ReactNode } from 'react'

import FullScreenButton from './FullScreenButton'
import { RefreshButton, type RefreshButtonProps } from './RefreshButton'
import RowGapButton from './RowGapButton'

export interface TableTitleProps extends RefreshButtonProps {
  /**
   * 选中的行
   */
  selectedRowKeys?: React.Key[]
  /**
   * 批量删除加载状态
   */
  batchDeleteLoading?: boolean
  /**
   * 批量删除事件
   */
  onBatchDelete?: (selectedRowKeys: React.Key[]) => void
  /**
   * 表格批量操作区域
   */
  renderTableBatchOpeate?: ReactNode
  /**
   * 表格操作区域
   */
  renderTableOpeate?: ReactNode
  /**
   * 是否全屏
   */
  isFullscreen?: boolean
  /**
   * 切换全屏事件
   */
  toggleFullscreen?: () => void
}

function TableTitle(props: TableTitleProps) {
  const {
    isFullscreen,
    toggleFullscreen,
    selectedRowKeys,
    refreshLoading,
    batchDeleteLoading,
    onRefresh,
    onBatchDelete,
    renderTableBatchOpeate,
    renderTableOpeate
  } = props

  const { t } = useTranslation()

  const hadSelected = (selectedRowKeys?.length ?? 0) > 0

  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-wrap items-center space-x-2 space-y-2 sm:space-x-4">
        {hadSelected ? (
          <>
            <RpDeletePopconfirm
              okBtnLoading={batchDeleteLoading}
              onConfirm={() => onBatchDelete?.(selectedRowKeys!)}
            >
              <RpButton variant="batch-delete" />
            </RpDeletePopconfirm>
            {renderTableBatchOpeate && renderTableBatchOpeate}
            <span className="!mt-0 text-xs sm:text-sm">
              {t('ALREADY.SELECTED', { count: selectedRowKeys!.length })}
            </span>
          </>
        ) : (
          <>{renderTableOpeate && renderTableOpeate}</>
        )}
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        <RefreshButton
          refreshLoading={refreshLoading}
          onRefresh={onRefresh}
        />
        <RowGapButton />
        <FullScreenButton
          isFullscreen={isFullscreen}
          toggleFullscreen={toggleFullscreen}
        />
      </div>
    </div>
  )
}
export default TableTitle
