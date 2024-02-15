export const useDocumentTitle = () => {
  const matches = useMatches()

  useEffect(() => {
    const matchedLeafItem = matches.at(-1)!.staticData.title ?? ''
    document.title = typeof matchedLeafItem === 'function' ? matchedLeafItem() : matchedLeafItem
  }, [matches])
}
