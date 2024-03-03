import { type TableProps as ATableProps } from 'antd'
import { merge } from 'lodash-es'

import { TableLayoutFullScreenContext, TableLayoutPropsContext } from '../context'
import styles from './index.module.scss'
import TableTitleRow from './TableTitleRow'

// 一些属性例如 size 在内部指定，所以需要过滤掉
type IgnoreProps = 'title' | 'size' | 'loading'

export interface TableProps<T> extends Omit<ATableProps<T>, IgnoreProps> {}

export default function Table<T extends object = any>(props: TableProps<T>) {
  const { pagination, ...restProps } = props

  const preferenceStore = usePreferenceStore()
  const tableLayoutProps = useContext(TableLayoutPropsContext)

  const containerRef = useRef(null)
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(containerRef, {
    pageFullscreen: {
      zIndex: 9999,
      className: 'table-layout-full-screen-container'
    }
  })

  const tableLayoutFullScreenContextValue = useMemo(
    () => ({
      isFullscreen,
      toggleFullscreen
    }),
    [isFullscreen, toggleFullscreen]
  )

  return (
    <ACard>
      <div
        ref={containerRef}
        className={styles.tableWrapper}
      >
        <TableLayoutFullScreenContext.Provider value={tableLayoutFullScreenContextValue}>
          <TableTitleRow />
        </TableLayoutFullScreenContext.Provider>
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
                loading: tableLayoutProps.refreshLoading,
                sticky: true
              } satisfies ATableProps<T>,
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
    </ACard>
  )
}
