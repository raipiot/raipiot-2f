export const Route = createLazyFileRoute('/_base/srm/supplier-entry/$id/detail')({
  component: () => <SupplierEntry.CrudPage mode="read" />
})
