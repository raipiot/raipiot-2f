export const useRoutesMeta = () => {
  const routesMeta = useMatches().map((match) => match.staticData)
  return routesMeta
}
