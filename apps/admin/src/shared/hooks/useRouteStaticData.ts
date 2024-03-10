/**
 * 获取路由叶子结点静态数据
 */
export const useRouteStaticData = () => useMatches().at(-1)?.staticData ?? {}
