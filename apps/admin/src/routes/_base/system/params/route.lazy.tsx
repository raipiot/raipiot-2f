import { TableLayout } from '@/features/layouts'

export const Route = createLazyFileRoute('/_base/system/params')({
  component: Params
})

function Params() {
  return <TableLayout />
}
