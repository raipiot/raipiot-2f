import * as invalidates from './invalidates'
import * as mutations from './mutations'
import * as pages from './pages'
import * as queries from './queries'
import * as queryKeys from './query-keys'

export * from './types'

export const SupplierIntroduce = {
  ...mutations,
  ...queries,
  ...queryKeys,
  ...pages,
  ...invalidates
}
