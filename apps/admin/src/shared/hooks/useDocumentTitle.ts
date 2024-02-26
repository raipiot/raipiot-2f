export const useDocumentTitle = () => {
  const matches = useMatches()
  const { i18n } = useTranslation()

  useEffect(() => {
    const matchedLeafItem = matches.at(-1)!.staticData.title ?? ''
    const title = I18nUtils.getText(matchedLeafItem)
    document.title = title ? `${title} | ${AppMetadata.appName}` : AppMetadata.appName
  }, [matches, i18n.language])
}
