export const useExpandedRowkeys = (initialState: React.Key[] = []) => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>(initialState)

  const addExpandedRowKey = useCallback(
    (key: React.Key) => setExpandedRowKeys((prev) => [...prev, key]),
    []
  )

  const removeExpandedRowKey = useCallback(
    (key: React.Key) => setExpandedRowKeys((prev) => prev.filter((k) => k !== key)),
    []
  )

  const clearExpandedRowKeys = useCallback(() => setExpandedRowKeys([]), [])

  return {
    expandedRowKeys,
    setExpandedRowKeys,
    addExpandedRowKey,
    removeExpandedRowKey,
    clearExpandedRowKeys
  }
}
