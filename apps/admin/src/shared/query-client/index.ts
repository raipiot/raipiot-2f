import { defaultQueryConfig } from '@raipiot-infra/tanstack-query'

const { queries } = defaultQueryConfig

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      ...queries,
      staleTime: 1000 * 30 // 30 秒
    }
  }
})
