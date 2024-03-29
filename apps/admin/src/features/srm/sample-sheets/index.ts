import * as mutations from './mutations'
import * as pages from './pages'
import * as createPages from './pages/create'
import * as sheetPage from './pages/sheet'
import * as queries from './queries'

export const SampleSheets = {
  ...pages,
  ...queries,
  ...mutations,
  ...createPages,
  ...sheetPage
}