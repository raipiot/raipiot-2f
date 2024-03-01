import type { TableProps as ATableProps } from 'antd'
import { merge } from 'lodash-es'

import { TableLayoutPropsContext } from '../context'
import styles from './index.module.scss'
import TableTitle from './TableTitle'

// 一些属性例如 size 在内部指定，所以需要过滤掉
export interface TableProps<T> extends Omit<ATableProps<T>, 'title' | 'size' | 'loading'> {}

export default function Table<T extends object = any>(props: TableProps<T>) {
  const { ...restProps } = props

  const tableLayoutProps = useContext(TableLayoutPropsContext)
  const preferenceStore = usePreferenceStore()
  const size = useSize(window.document.body)

  return (
    <ACard>
      <div className={styles.customTable}>
        <ATable<T>
          // NOTE: 这里第一个参数是空对象，是为了防止改变原对象
          {...merge(
            {},
            {
              scroll: {
                scrollToFirstRowOnChange: true,
                x: 800,
                y: size?.height ? size.height - 200 : 0
              },
              pagination: false,
              title: () => <TableTitle />,
              size: preferenceStore.tableSize,
              loading: tableLayoutProps.refreshLoading
            } satisfies ATableProps<T>,
            restProps
          )}
        />
      </div>
    </ACard>
  )
}
