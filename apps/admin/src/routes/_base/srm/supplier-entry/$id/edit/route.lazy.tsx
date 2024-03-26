export const Route = createLazyFileRoute('/_base/srm/supplier-entry/$id/edit')({
  component: () => <SupplierEntry.CrudPage mode="edit" />
})
