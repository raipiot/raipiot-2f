import * as hooks from './hooks'
import * as invalidates from './invalidates'
import * as queries from './queries'
import * as queryKeys from './query-keys'

export const DictConfigs = {
  ...hooks,
  ...queries,
  ...invalidates,
  ...queryKeys
}
