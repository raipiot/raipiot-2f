import * as hooks from './hooks'
import * as pages from './pages'
import * as queries from './queries'
import * as queryKeys from './query-keys'

export const LifeCycle = {
  ...hooks,
  ...pages,
  ...queries,
  ...queryKeys
}
