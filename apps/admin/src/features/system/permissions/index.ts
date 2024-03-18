import * as invalidates from './invalidates'
import * as mutations from './mutations'
import * as queries from './queries'
import * as queryKeys from './query-keys'

export const SPermitions = {
  ...mutations,
  ...queries,
  ...queryKeys,
  ...invalidates
}
