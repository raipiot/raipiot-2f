/**
 * 生成网站标题
 * @description 用于动态改变 Document.title
 */
export const useDocumentTitle = () => {
  const routeMeta = useRouteStaticData()
  const { i18n } = useTranslation()

  useEffect(() => {
    const title = I18nUtils.getText(routeMeta.title)
    document.title = title ? `${title} | ${AppMetadata.appName}` : AppMetadata.appName
  }, [routeMeta, i18n.language])
}
