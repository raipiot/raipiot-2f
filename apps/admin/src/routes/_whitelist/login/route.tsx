import { z } from 'zod'

const loginSearchSchema = z.object({
  redirect: z.string().optional()
})

export const Route = createFileRoute('/_whitelist/login')({
  validateSearch: loginSearchSchema,
  staticData: {
    title: '登录'
  }
})
