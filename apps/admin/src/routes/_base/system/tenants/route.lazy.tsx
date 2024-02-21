import { TableLayout } from '@/features/layouts'

export const Route = createLazyFileRoute('/_base/system/tenants')({
  component: Tenants
})

function Tenants() {
  return <TableLayout />
}
