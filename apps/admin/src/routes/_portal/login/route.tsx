import { z } from 'zod'

const t = i18n.getFixedT(null, 'ROUTER')

const loginSearchSchema = z.object({
  redirect: z.string().optional()
})

export const Route = createFileRoute('/_portal/login')({
  validateSearch: loginSearchSchema,
  staticData: {
    title: () => t('LOGIN')
  }
})
