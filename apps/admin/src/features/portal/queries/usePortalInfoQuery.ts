import { portalInfoQK } from './query-keys'

export const portalInfoQueryOptions = () =>
  queryOptions({
    queryKey: portalInfoQK(),
    queryFn: ({ signal }) => portalAPI.info({ signal })
  })

export const usePortalInfoSusptenseQuery = () => useSuspenseQuery(portalInfoQueryOptions())
