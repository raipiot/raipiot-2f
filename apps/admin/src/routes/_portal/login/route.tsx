import { z } from 'zod'

import i18n from '@/i18n'

const loginSearchSchema = z.object({
  redirect: z.string().optional()
})

export const Route = createFileRoute('/_portal/login')({
  validateSearch: loginSearchSchema,
  staticData: {
    title: () => i18n.t('BACK')
  }
})
