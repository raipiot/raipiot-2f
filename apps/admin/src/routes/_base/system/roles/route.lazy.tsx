import { TableLayout } from '@/features/layouts'

export const Route = createLazyFileRoute('/_base/system/roles')({
  component: Roles
})

function Roles() {
  return <TableLayout />
}
