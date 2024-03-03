import type { ParamPageDto } from '@raipiot-2f/api'

import { systemParamsQK } from './query-keys'

export const systemParamsQueryOptions = (params: ParamPageDto) =>
  queryOptions({
    queryKey: systemParamsQK(params),
    queryFn: ({ signal }) => systemParamsAPI.list(params, signal),
    placeholderData: keepPreviousData,
    enabled: false
  })

export const useSystemParamsQuery = (params: ParamPageDto) =>
  useQuery(systemParamsQueryOptions(params))

export const useSystemParamsSuspenseQuery = (params: ParamPageDto) =>
  useSuspenseQuery(systemParamsQueryOptions(params))
