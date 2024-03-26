export const Route = createFileRoute('/_base/srm/questionnaires/')({
  staticData: {
    title: '调查表管理',
    permCode: 'srm:questionnaires'
  },
  beforeLoad: async () => {
    await queryClient.ensureQueryData(Questionnaires.listQO(PageUtils.initParams()))
  }
})
