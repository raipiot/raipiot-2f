import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

export const Route = createFileRoute('/_base/srm/lifecycle/supplier/application-form/create')({
  staticData: {
    title: '供应商申请单'
  },
  validateSearch: z.object({
    supplierId: z.string().optional(),
    upgrade: z.boolean().optional(),
    target: z.enum(['1', '2', '3', '4', '5']).optional()
  })
})
