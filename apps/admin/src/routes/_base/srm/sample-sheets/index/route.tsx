import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_base/srm/sample-sheets/')({
  staticData: {
    title: '送样管理'
  },
  loader: () => queryClient.ensureQueryData(SampleSheets.queries.listOP(PageUtils.initParams()))
})
