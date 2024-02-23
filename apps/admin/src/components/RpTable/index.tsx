import type { TableProps } from 'antd'
import { merge } from 'lodash-es'

interface RpTableProps<T> extends TableProps<T> {}

export default function RpTable<T extends object = any>(props: RpTableProps<T>) {
  const { containerRef, y } = useTableContainer()

  const tableProps: TableProps = useMemo(
    () => ({
      scroll: {
        scrollToFirstRowOnChange: true,
        x: 800,
        y
      }
    }),
    [y]
  )

  return (
    <div ref={containerRef}>
      <ATable<T> {...merge(tableProps, props)} />
    </div>
  )
}
