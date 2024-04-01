import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_base/srm/process/lifecycle/')({
  staticData: {
    title: '生命周期管理'
  },
  loader: () => queryClient.ensureQueryData(Process.lifeCycle.listQO(PageUtils.initParams()))
})
