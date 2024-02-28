export const useRouteMeta = () => {
  const routeMeta = useMatches().at(-1)?.staticData ?? {}
  return routeMeta
}
