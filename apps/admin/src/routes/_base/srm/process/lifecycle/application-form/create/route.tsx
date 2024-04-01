import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

export const Route = createFileRoute('/_base/srm/process/lifecycle/application-form/create')({
  staticData: {
    title: '新建申请单'
  },
  validateSearch: z.object({
    upgrade: z.boolean().optional()
  })
})
