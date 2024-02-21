import { TableLayout } from '@/features/layouts'

export const Route = createLazyFileRoute('/_base/system/business-dicts')({
  component: BusinessDicts
})

function BusinessDicts() {
  return <TableLayout />
}
