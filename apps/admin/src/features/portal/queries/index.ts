export const portalInfoQueryKey = [Symbol('portalInfo')]

export const portalInfoQueryOptions = queryOptions({
  queryKey: portalInfoQueryKey,
  queryFn: ({ signal }) => portalAPI.info({ signal })
})

export const usePortalInfoSusptenseQuery = () => useSuspenseQuery(portalInfoQueryOptions)
