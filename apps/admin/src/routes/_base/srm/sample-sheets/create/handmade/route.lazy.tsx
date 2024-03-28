import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/srm/sample-sheets/create/handmade')({
  component: SampleSheets.CreateByHandPage
})
