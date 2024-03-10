import type { DefaultOptionType } from 'antd/es/select'

import { flattenRouterLabels } from '@/features/menus'

export default function SearchBar() {
  const navigate = useNavigate()
  const sidebarStore = useSidebarStore()

  const [value, setValue] = useState('')
  const [options, setOptions] = useState<DefaultOptionType[]>([])

  const getMatchedOptions = (text: string) => {
    const regex = new RegExp(`(${text})`, 'gi')
    setOptions(
      flattenRouterLabels()
        .filter((item) => item.label.match(regex))
        .sort((a, b) => {
          const aMatches = a.label.match(regex) || []
          const bMatches = b.label.match(regex) || []
          return bMatches.length - aMatches.length
        })
        .map((i) => {
          const parts = i.label.split(regex)
          return {
            label: (
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    className={text && clsx(regex.test(part) && 'bg-blue-500 text-white')}
                  >
                    {part}
                  </span>
                ))}
              </div>
            ),
            value: i.key
          }
        })
    )
  }

  return (
    <div
      className={clsx(
        'w-full px-2.5 py-3 transition-all',
        sidebarStore.isCollapse ? 'h-0 !p-0 opacity-0' : 'h-14 opacity-100'
      )}
    >
      <AAutoComplete
        style={{ width: '100%' }}
        value={value}
        onChange={(text) => setValue(text)}
        options={options}
        onSelect={(v) => {
          navigate({ to: v })
          setValue('')
        }}
        onSearch={(text) => getMatchedOptions(text)}
        allowClear
      />
    </div>
  )
}
