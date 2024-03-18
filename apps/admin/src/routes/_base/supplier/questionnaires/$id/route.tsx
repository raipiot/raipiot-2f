import { isEmpty } from 'lodash-es'

export const Route = createFileRoute('/_base/supplier/questionnaires/$id')({
  staticData: {
    title: '调查表明细'
  },
  loader: async ({ params }) => {
    const { id } = params
    if (isEmpty(id)) {
      throw redirect({ to: '/404' })
    }
  }
})
