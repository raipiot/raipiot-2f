import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/srm/sample-sheets/sheet/$id')({
  component: SampleSheets.SampleSheetDetailPage
})
