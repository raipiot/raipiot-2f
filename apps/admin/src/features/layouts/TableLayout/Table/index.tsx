import type { TableProps as ATableProps } from 'antd'
import { merge } from 'lodash-es'

import { TableLayoutPropsContext, TableLayoutRefContext } from '../context'
import styles from './index.module.scss'
import TableTitleRow from './TableTitleRow'

// 一些属性例如 size 在内部指定，所以需要过滤掉
type IgnoreProps = 'title' | 'size' | 'loading'

export interface TableProps<T> extends Omit<ATableProps<T>, IgnoreProps> {}

export default function Table<T extends object = any>(props: TableProps<T>) {
  const { ...restProps } = props

  const tableLayoutRef = useContext(TableLayoutRefContext)
  const tableLayoutProps = useContext(TableLayoutPropsContext)
  const preferenceStore = usePreferenceStore()

  return (
    <ACard>
      <div
        ref={tableLayoutRef}
        className={styles.tableWrapper}
      >
        <TableTitleRow />
        <div
          className={clsx(
            'mt-2 h-[calc(100vh-200px)] overflow-auto sm:mt-4 sm:h-[calc(100vh-252px)]',
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
      </div>
    </ACard>
  )
}
