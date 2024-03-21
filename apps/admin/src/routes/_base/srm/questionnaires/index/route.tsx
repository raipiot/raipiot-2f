export const Route = createFileRoute('/_base/srm/questionnaires/')({
  staticData: {
    title: '调查表管理',
    icon: <MaterialSymbolsContractOutlineRounded />,
    permCode: 'srm:questionnaires'
  },
  loader: () => queryClient.ensureQueryData(Questionnaires.listQO(PageUtils.initParams()))
})
