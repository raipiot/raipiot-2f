import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_base/srm/sample-sheets/create/')({
  staticData: {
    title: '创建送样表',
    permCode: 'srm:sample-sheets:create'
  },
  loader: () => queryClient.ensureQueryData(SampleSheets.queries.listOP(PageUtils.initParams()))
})
