import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

export const Route = createFileRoute('/_base/srm/lifecycle/supplier/record')({
  staticData: {
    title: '申请单查询'
  },
  validateSearch: z.object({
    keyword: z.string().optional()
  })
})
