export const useDocumentTitle = () => {
  const matches = useMatches()

  useEffect(() => {
    const matchedLeafItem = matches.at(-1)!.staticData.title ?? ''
    const title = I18nUtils.getText(matchedLeafItem)
    document.title = title ? `${title} | ${AppMetadata.appName}` : AppMetadata.appName
  }, [matches])
}
