/**
 * 获取路由静态数据
 */
export const useRoutesStaticData = () => useMatches().map((match) => match.staticData)
