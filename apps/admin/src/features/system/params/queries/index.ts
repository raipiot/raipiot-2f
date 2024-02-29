import type { ParamPageDto } from '@raipiot-2f/api'

import { genSystemParamsQK } from './query-keys'

export const systemParamsQueryOptions = (params: ParamPageDto) =>
  queryOptions({
    queryKey: genSystemParamsQK(params),
    queryFn: ({ signal }) => systemParamsAPI.list(params, signal),
    placeholderData: keepPreviousData,
    enabled: false
  })

export const useSystemParamsQuery = (params: ParamPageDto) =>
  useQuery(systemParamsQueryOptions(params))

export const useSystemParamsSuspenseQuery = (params: ParamPageDto) =>
  useSuspenseQuery(systemParamsQueryOptions(params))
