import { Lang } from '@raipiot-infra/enums'

interface LanguageButtonProps {
  iconSize?: number
  text?: string
}

export default function LanguageButton({ iconSize = 18, text }: LanguageButtonProps) {
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

  return (
    <ADropdown
      menu={{
        items: langOptions,
        onClick: ({ key }) => {
          langStore.setLang(key)
          setLangOptions((draft) => {
            draft.forEach((item) => {
              item.disabled = item.key === key
            })
          })
        }
      }}
      placement="bottom"
    >
      <div className="flex items-center">
        <MaterialSymbolsTranslateRounded
          className="cursor-pointer"
          fontSize={iconSize}
        />
        {text && <span className="pl-2">{text}</span>}
      </div>
    </ADropdown>
  )
}
