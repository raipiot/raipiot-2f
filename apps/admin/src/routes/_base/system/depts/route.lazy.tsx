import { TableLayout } from '@/features/layouts'

export const Route = createLazyFileRoute('/_base/system/depts')({
  component: Depts
})

function Depts() {
  return <TableLayout />
}
