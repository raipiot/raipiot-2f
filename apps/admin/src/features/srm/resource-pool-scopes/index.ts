import * as hooks from './hooks'
import * as maps from './maps'
import * as mutations from './mutations'
import * as queries from './queries'
import * as queryKeys from './query-keys'

export * from './types'

export const ResourcePoolScopes = {
  ...queries,
  ...queryKeys,
  ...mutations,
  ...hooks,
  ...maps
}
