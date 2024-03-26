export const Route = createFileRoute('/_base/srm/invitations/')({
  staticData: {
    title: '企业邀约管理'
  },
  beforeLoad: async () => {
    await queryClient.ensureQueryData(Invitations.listQO(PageUtils.initParams()))
  }
})
