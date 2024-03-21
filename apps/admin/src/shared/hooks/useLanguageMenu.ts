import { Lang } from '@raipiot-infra/utils'
import type { MenuProps } from 'antd'

/**
 * 语言菜单选择
 * @description 构造一个 antd Menu 组件的配置项，用于切换语言
 */
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
