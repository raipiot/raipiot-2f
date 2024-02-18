import { z } from 'zod'

const loginSearchSchema = z.object({
  redirect: z.string().optional()
})

export const Route = createFileRoute('/_portal/login')({
  validateSearch: loginSearchSchema,
  staticData: {
    title: () => '登录',
    name: () => '登录'
  },
  beforeLoad: () => {
    // 首次登录，清空内部访问记录
    useTabRecordStore.getState().clearRecords()
  }
})
