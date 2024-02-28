import { TableLayout } from '@/features/layouts'

export const Route = createLazyFileRoute('/_base/templates/common-table')({
  component: CommonTable
})

function CommonTable() {
  return <TableLayout />
}
