export const Route = createFileRoute('/_base/srm/invitations/$id/detail')({
  staticData: {
    title: '邀约详情'
  },
  beforeLoad: async ({ params }) => {
    const { id } = params
    await queryClient.ensureQueryData(Invitations.detailQO(id))
  }
})
