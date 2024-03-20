import * as invalidates from './invalidates'
import * as mutations from './mutations'
import * as queries from './queries'
import * as queryKeys from './query-keys'
import * as utils from './utils'

export const Perms = {
  ...mutations,
  ...queries,
  ...queryKeys,
  ...invalidates,
  ...utils
}
