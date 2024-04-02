import * as invalidates from './invalidates'
import * as pages from './pages'
import * as queries from './queries'
import * as queryKeys from './query-keys'

export * from './types'

export const SupplierGreenChannels = {
  ...queries,
  ...queryKeys,
  ...pages,
  ...invalidates
}
