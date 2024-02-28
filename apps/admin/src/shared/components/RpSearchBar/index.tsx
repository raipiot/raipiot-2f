import type { ChangeEvent } from 'react'

interface RpSearchBarProps {
  searchText?: string
  setSearchText?: (value: string) => void
  loading?: boolean
  handleSearch?: () => void
}

const RpSearchBar = memo<RpSearchBarProps>((props: RpSearchBarProps) => {
  const { t } = useTranslation()

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.setSearchText) {
      props.setSearchText(e.target.value)
    }
  }

  const handleSearch = () => {
    if (props.handleSearch) {
      props.handleSearch()
    }
  }

  return (
    <AFlex
      justify="space-between"
      align="center"
      className="h-8"
    >
      <ASpace>
        <AInput.Search
          value={props.searchText}
          onChange={handleSearchTextChange}
          loading={props.loading}
          onSearch={handleSearch}
          allowClear
          placeholder={t('KEYWORDS.SEARCH')}
        />
      </ASpace>
      <AButton
        className="!flex items-center justify-center"
        shape="circle"
        icon={props.loading ? <SvgSpinners180RingWithBg /> : <MaterialSymbolsRefreshRounded />}
        onClick={handleSearch}
      />
    </AFlex>
  )
})
export default RpSearchBar