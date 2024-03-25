import { GreenChannelSearchTable } from './GreenChannelSearchTable'
import { SearchTable } from './SearchTable'

export function SearchPage() {
  return (
    <RpPageContainer>
      <ATabs
        items={[
          { key: '1', label: '供应商', children: <SearchTable /> },
          { key: '2', label: '绿色通道供应商', children: <GreenChannelSearchTable /> }
        ]}
      />
    </RpPageContainer>
  )
}
