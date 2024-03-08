import type { ReactNode } from 'react'

import type { RpRefreshButtonProps } from './RpRefreshButton'

export interface RpTableTitleProps extends RpRefreshButtonProps {
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

function RpTableTitle(props: RpTableTitleProps) {
  const {
    selectedRowKeys,
    batchDeleteLoading,
    onBatchDelete,
    renderTableBatchOpeate,
    renderTableOpeate,
    refreshLoading,
    onRefresh,
    isFullscreen,
    toggleFullscreen
  } = props

  const { t } = useTranslation()

  const hadSelected = (selectedRowKeys?.length ?? 0) > 0

  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-2 sm:space-x-4">
        {hadSelected ? (
          <>
            <RpDeletePopconfirm
              okBtnLoading={batchDeleteLoading}
              onConfirm={() => onBatchDelete?.(selectedRowKeys!)}
            >
              <AButton>{t('BATCH.DELETE')}</AButton>
            </RpDeletePopconfirm>
            {renderTableBatchOpeate && renderTableBatchOpeate}
            <span className="text-xs sm:text-sm">
              {t('ALREADY.SELECTED', { count: selectedRowKeys!.length })}
            </span>
          </>
        ) : (
          <>{renderTableOpeate && renderTableOpeate}</>
        )}
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        <RpRefreshButton
          refreshLoading={refreshLoading}
          onRefresh={onRefresh}
        />
        <RpRowGapButton />
        <RpFullScreenButton
          isFullscreen={isFullscreen}
          toggleFullscreen={toggleFullscreen}
        />
      </div>
    </div>
  )
}
export default RpTableTitle
