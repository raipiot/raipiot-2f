import { TableLayout } from '@/features/layouts'

export const Route = createLazyFileRoute('/_base/system/dicts')({
  component: SystemDicts
})

function SystemDicts() {
  const { t } = useTranslation(['COMMON'])
  return <TableLayout />
}
