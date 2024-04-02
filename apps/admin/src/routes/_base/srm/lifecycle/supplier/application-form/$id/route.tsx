import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_base/srm/lifecycle/supplier/application-form/$id')({
  staticData: {
    title: '供应商申请单详情'
  },
  beforeLoad: async ({ params }) => {
    try {
      await queryClient.ensureQueryData(
        LifeCycle.applyInfoQO({
          applyCode: params.id
        })
      )
    } catch (error) {
      redirect({
        to: '/404'
      })
    }
  }
})
