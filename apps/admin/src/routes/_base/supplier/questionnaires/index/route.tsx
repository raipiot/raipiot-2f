export const Route = createFileRoute('/_base/supplier/questionnaires/')({
  staticData: {
    title: '调查表管理',
    icon: <MaterialSymbolsContractOutlineRounded />
  },
  loader: () => queryClient.ensureQueryData(Questionnaires.listQueryOptions(PageUtils.initParams()))
})
