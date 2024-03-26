import * as pages from './pages'
import * as queries from './queries'
import * as queryKeys from './query-keys'

export * from './types'

export const SupplierBlackList = {
  ...queries,
  ...queryKeys,
  ...pages
}
