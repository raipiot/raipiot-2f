import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const validateSearch = z.object({
  id: z.union([z.string(), z.number()]).optional()
})

export const Route = createFileRoute('/_base/srm/sample-sheets/create/handmade')({
  staticData: {
    title: '送样表 - 手动创建'
  },
  validateSearch,
  loader: async ({ location }) => {
    const { id } = location.search as { id?: string | number }
    if (id) {
      await queryClient.ensureQueryData(SampleSheets.queries.detailOP(`${id}`))
    }
  }
})
