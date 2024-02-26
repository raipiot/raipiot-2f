import { defaultQueryConfig } from '@raipiot-infra/tanstack-query'

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryConfig
})
