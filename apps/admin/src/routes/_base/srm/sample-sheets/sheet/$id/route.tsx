import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const validateSearch = z.object({
  id: z.union([z.string(), z.number()]).optional()
})

export const Route = createFileRoute('/_base/srm/sample-sheets/sheet/$id')({
  staticData: {
    title: '送样表 - 手动创建'
  },
  validateSearch,
  beforeLoad: async ({ params }) => {
    const { id } = params
    // 通过 id 获取数据
    try {
      await queryClient.ensureQueryData(SampleSheets.queries.detailOP(`${id}`))
    } catch (error) {
      // 没有数据或错误，则跳转到列表页
      redirect({
        to: '/srm/sample-sheets'
      })
    }
  }
})
