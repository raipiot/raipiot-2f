import type { IParamsPageDto, ParamsPageDto } from '@/api/system/params/params.dto'

import { genSystemParamsQK } from './query-keys'

export const systemParamsQueryOptions = (params: ParamsPageDto) =>
  queryOptions({
    queryKey: genSystemParamsQK(params),
    queryFn: ({ signal }) => SystemParamsAPI.list(params, signal),
    placeholderData: keepPreviousData,
    enabled: false
  })

export const useSystemParamsQuery = (params: IParamsPageDto) =>
  useQuery(systemParamsQueryOptions(params))

export const useSystemParamsSuspenseQuery = (params: IParamsPageDto) =>
  useSuspenseQuery(systemParamsQueryOptions(params))
