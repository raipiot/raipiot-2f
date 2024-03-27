import { createLazyFileRoute } from '@tanstack/react-router'

import { SampleSheets } from '@/features'

export const Route = createLazyFileRoute('/_base/srm/sample-sheets/create/')({
  component: SampleSheets.CreatePage
})
