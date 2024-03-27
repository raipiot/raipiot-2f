export const Route = createLazyFileRoute('/_base/srm/supplier-introduce/$id/detail')({
  component: () => <SupplierIntroduce.CrudPage mode="read" />
})
