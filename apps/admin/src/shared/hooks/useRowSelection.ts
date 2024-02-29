import { Table } from 'antd'
import type { TableRowSelection } from 'antd/es/table/interface'

export const useRowSelection = <T>(initialState: React.Key[] = []) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>(initialState)

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const clearSelectedRowKeys = () => setSelectedRowKeys([])

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE]
  } satisfies TableRowSelection<T>

  return {
    rowSelection,
    selectedRowKeys,
    setSelectedRowKeys,
    clearSelectedRowKeys
  }
}
