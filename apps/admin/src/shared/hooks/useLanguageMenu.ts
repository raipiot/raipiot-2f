import { Lang } from '@raipiot-infra/enums'
import type { MenuProps } from 'antd'

export const useLanguageMenu = () => {
  const langStore = useLangStore()

  const [langOptions, setLangOptions] = useImmer([
    {
      key: 'zh-CN',
      label: '简体中文',
      disabled: langStore.lang === Lang['zh-CN']
    },
    {
      key: 'en-US',
      label: 'English',
      disabled: langStore.lang === Lang['en-US']
    }
  ])

  return {
    langOptions,
    setLangOptions,
    menu: {
      items: langOptions,
      onClick: ({ key }) => {
        langStore.setLang(key)
        setLangOptions((draft) => {
          draft.forEach((item) => {
            item.disabled = item.key === key
          })
        })
      }
    } satisfies MenuProps
  }
}
