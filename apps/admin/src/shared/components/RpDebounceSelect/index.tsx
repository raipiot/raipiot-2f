import type { SelectProps } from 'antd'
import debounce from 'lodash-es/debounce'

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>
  debounceTimeout?: number
}

export default function RpDebounceSelect<
  ValueType extends { key?: string; label: React.ReactNode; value: string | number } = any
>({ fetchOptions, debounceTimeout = 800, ...props }: DebounceSelectProps<ValueType>) {
  const [fetching, setFetching] = useState(false)
  const [options, setOptions] = useState<ValueType[]>([])
  const fetchRef = useRef(0)

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1
      const fetchId = fetchRef.current
      setOptions([])
      setFetching(true)

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return
        }

        setOptions(newOptions)
        console.log('new options:', newOptions)
        setFetching(false)
      })
    }

    return debounce(loadOptions, debounceTimeout)
  }, [fetchOptions, debounceTimeout])

  return (
    <ASelect
      showSearch
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <ASpin size="small" /> : null}
      filterOption={false}
      optionFilterProp="label"
      {...props}
    >
      {options.map((option) => (
        <ASelect.Option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </ASelect.Option>
      ))}
    </ASelect>
  )
}
