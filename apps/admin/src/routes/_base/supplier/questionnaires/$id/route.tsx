import { isEmpty } from 'lodash-es'

export const Route = createFileRoute('/_base/supplier/questionnaires/$id')({
  staticData: {
    title: '调查表明细',
    permCode: 'supplier:questionnaires'
  },
  loader: async ({ params }) => {
    const { id } = params
    if (isEmpty(id)) {
      throw redirect({ to: '/404' })
    }
    await queryClient.ensureQueryData(Questionnaires.detailQueryOptions(id))
  }
})
