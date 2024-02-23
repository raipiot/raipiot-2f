/**
 * 计算表格容器高度
 * @deprecated
 */
export const useTableContainer = () => {
  const containerRef = useRef<any>(null)
  const [y, setY] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.offsetHeight - 96
      setY(containerHeight)
    }
  }, [])

  return { containerRef, y, setY }
}
