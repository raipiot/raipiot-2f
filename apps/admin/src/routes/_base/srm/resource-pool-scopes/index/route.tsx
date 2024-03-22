export const Route = createFileRoute('/_base/srm/resource-pool-scopes/')({
  staticData: {
    title: '资源池范围配置',
    permCode: 'srm:resource-pool-scopes'
  },
  loader: async () => {
    await queryClient.ensureQueryData(ResourcePoolScopes.listQO(PageUtils.initParams()))
  }
})
