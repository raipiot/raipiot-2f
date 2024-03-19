export const Route = createFileRoute('/_base/supplier/questionnaires/')({
  staticData: {
    title: '调查表管理',
    icon: <MaterialSymbolsContractOutlineRounded />,
    permCode: 'supplier:questionnaires'
  },
  loader: () => queryClient.ensureQueryData(Questionnaires.listQueryOptions(PageUtils.initParams()))
})
