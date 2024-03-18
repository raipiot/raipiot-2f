import * as components from './components'
import * as context from './context'
import * as hooks from './hooks'
import * as invalidates from './invalidates'
import * as mutations from './mutations'
import * as providers from './providers'
import * as queries from './queries'

export const Roles = {
  ...components,
  ...hooks,
  ...mutations,
  ...queries,
  ...providers,
  ...context,
  ...invalidates
}
