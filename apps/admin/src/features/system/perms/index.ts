import * as components from './components'
import * as contexts from './contexts'
import * as hooks from './hooks'
import * as invalidates from './invalidates'
import * as mutations from './mutations'
import * as providers from './providers'
import * as queries from './queries'
import * as queryKeys from './query-keys'
import * as utils from './utils'

export const Perms = {
  ...mutations,
  ...queries,
  ...queryKeys,
  ...invalidates,
  ...hooks,
  ...providers,
  ...components,
  ...contexts,
  ...utils
}
