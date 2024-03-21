import { isEmpty } from 'lodash-es'

export const Route = createFileRoute('/_base/srm/questionnaires/$id')({
  staticData: {
    title: '调查表明细',
    permCode: 'srm:questionnaires'
  },
  loader: async ({ params }) => {
    const { id } = params
    if (isEmpty(id)) {
      throw redirect({ to: '/404' })
    }
    await queryClient.ensureQueryData(Questionnaires.detailQO(id))
  }
})
