import type { SupplierVo } from '@raipiot-2f/api'

export const useSelectTableColumns = () => {
  const { createActions, createColumns } = useTableCreator<SupplierVo>()

  return {
    columns: createColumns([{}, createActions({})])
  }
}
