import * as components from './components'
import * as context from './context'
import * as hooks from './hooks'
import * as invalidates from './invalidates'
import * as mutations from './mutations'
import * as providers from './providers'
import * as queries from './queries'
import * as queryKeys from './query-keys'

export * from './types'

export const Dicts = {
  ...components,
  ...hooks,
  ...providers,
  ...context,
  ...queries,
  ...mutations,
  ...invalidates,
  ...queryKeys
}
