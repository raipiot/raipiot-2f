export const useDocumentTitle = () => {
  const matches = useMatches()

  useEffect(() => {
    const matchedLeafItem = matches.at(-1)!.staticData.title ?? ''
    document.title = I18nUtils.getText(matchedLeafItem)
  }, [matches])
}
