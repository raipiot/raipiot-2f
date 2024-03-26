export const Route = createFileRoute('/_base/srm/supplier-entry/$id/detail')({
  staticData: {
    title: '企业认证'
  },
  beforeLoad: async ({ params }) => {
    const { id } = params
    await Promise.all([
      queryClient.ensureQueryData(Suppliers.detailQO(id)),
      queryClient.ensureQueryData(Suppliers.contactDetailQO(id)),
      queryClient.ensureQueryData(Suppliers.addressDetailQO(id)),
      queryClient.ensureQueryData(Suppliers.bankDetailQO(id)),
      queryClient.ensureQueryData(Suppliers.invoiceDetailQO(id)),
      queryClient.ensureQueryData(Suppliers.financeDetailQO(id)),
      queryClient.ensureQueryData(Suppliers.attachmentDetailQO(id))
    ])
  }
})
