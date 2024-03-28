export const Route = createFileRoute('/_base/srm/suppliers/')({
  staticData: {
    title: '管理工作台'
  },
  beforeLoad: async () => {
    await Promise.allSettled([
      queryClient.ensureQueryData(Suppliers.listQO(PageUtils.initParams()))
    ])
    queryClient.ensureQueryData(Suppliers.localListQO(PageUtils.initParams()))
  }
})
