/**
 * i18n 远程翻译
 */
export const useRemoteTranslation = () => {
  const { t } = useTranslation()
  const transformRemoteKey = (key: string = '') => (i18n.exists(key) ? t(key as any) : key)
  return {
    rt: transformRemoteKey
  }
}
