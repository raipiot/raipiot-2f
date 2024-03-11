export const useExpandedRowkeys = (initialState: React.Key[] = []) => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>(initialState)

  const addExpandedRowKey = (key: React.Key) => setExpandedRowKeys((prev) => [...prev, key])

  const removeExpandedRowKey = (key: React.Key) =>
    setExpandedRowKeys((prev) => prev.filter((k) => k !== key))

  const clearExpandedRowKeys = () => setExpandedRowKeys([])

  return {
    expandedRowKeys,
    setExpandedRowKeys,
    addExpandedRowKey,
    removeExpandedRowKey,
    clearExpandedRowKeys
  }
}
