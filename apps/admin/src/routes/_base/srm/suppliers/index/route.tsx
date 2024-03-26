export const Route = createFileRoute('/_base/srm/suppliers/')({
  staticData: {
    title: '管理工作台'
  },
  beforeLoad: async () => {
    await queryClient.ensureQueryData(Suppliers.listQO(PageUtils.initParams()))
  }
})
