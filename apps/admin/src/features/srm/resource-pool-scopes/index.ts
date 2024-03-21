import * as mutations from './mutations'
import * as queries from './queries'
import * as queryKeys from './query-keys'

export * from './types'

export const ResourcePoolScopes = {
  ...queries,
  ...queryKeys,
  ...mutations
}
