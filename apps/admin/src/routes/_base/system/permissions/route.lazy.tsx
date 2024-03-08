import { TableLayout } from '@/features/layouts'

export const Route = createLazyFileRoute('/_base/system/permissions')({
  component: Permissions
})

function Permissions() {
  return <RpWaiting />
}
