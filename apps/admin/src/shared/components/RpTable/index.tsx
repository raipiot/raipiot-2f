import type { TableProps } from 'antd'
import { merge } from 'lodash-es'

import rpWithCard from '../RpWithCard'
import styles from './index.module.scss'
import type { TableTitleProps } from './TableTitle'
import TableTitle from './TableTitle'

// 一些属性例如 size 在内部指定，所以需要过滤掉
type IgnoreProps = 'title' | 'size' | 'loading'

export interface RpTableProps<T> extends Omit<TableProps<T>, IgnoreProps>, TableTitleProps {}

type RpTableComponent = <T extends object = any>(props: RpTableProps<T>) => JSX.Element

const RpTable: RpTableComponent = rpWithCard(<T extends object = any>(props: RpTableProps<T>) => {
  const {
    pagination,
    refreshLoading,
    batchDeleteLoading,
    onRefresh,
    onBatchDelete,
    renderTableBatchOpeate,
    renderTableOpeate,
    ...restProps
  } = props

  const preferenceStore = usePreferenceStore()

  const containerRef = useRef(null)
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(containerRef, {
    pageFullscreen: {
      zIndex: 9999,
      className: 'rp-table-layout-full-screen-container'
    }
  })

  const tableTitleProps = useMemo(
    () => ({
      isFullscreen,
      toggleFullscreen,
      refreshLoading,
      batchDeleteLoading,
      onRefresh,
      onBatchDelete,
      renderTableBatchOpeate,
      renderTableOpeate
    }),
    [
      isFullscreen,
      toggleFullscreen,
      refreshLoading,
      batchDeleteLoading,
      onRefresh,
      onBatchDelete,
      renderTableBatchOpeate,
      renderTableOpeate
    ]
  )

  return (
    <div
      ref={containerRef}
      className={styles.tableWrapper}
    >
      <TableTitle {...tableTitleProps} />
      <div
        className={clsx(
          'mt-2  overflow-auto sm:mt-4',
          isFullscreen
            ? 'h-[calc(100vh-104px)] sm:h-[calc(100vh-136px)]'
            : 'h-[calc(100vh-258px)] sm:h-[calc(100vh-298px)]',
          styles.tableContainer
        )}
      >
        <ATable<T>
          // NOTE: 这里第一个参数是空对象，是为了防止改变原对象
          {...merge(
            {},
            {
              scroll: {
                scrollToFirstRowOnChange: true,
                x: 800
              },
              pagination: false,
              size: preferenceStore.tableSize,
              loading: refreshLoading,
              sticky: true
            } satisfies TableProps<T>,
            restProps
          )}
        />
      </div>
      {pagination && (
        <div className="mt-2 text-right sm:mt-4">
          <APagination {...pagination} />
        </div>
      )}
    </div>
  )
})
export default RpTable
