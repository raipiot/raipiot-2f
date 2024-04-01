import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const validateSearch = z.object({
  keyword: z.string().optional()
})

export const Route = createFileRoute('/_base/srm/process/lifecycle/record')({
  staticData: {
    title: '申请表查询'
  },
  beforeLoad: async ({ search }) => {
    try {
      const { keyword = '' } = search
      // 请求数据
      await queryClient.ensureQueryData(
        Process.lifeCycle.applicationFormListQO(PageUtils.initParams({ keyword }))
      )
    } catch (error) {
      console.error(error)
      redirect({
        to: '/500',
        replace: true
      })
    }
  },
  validateSearch
})
