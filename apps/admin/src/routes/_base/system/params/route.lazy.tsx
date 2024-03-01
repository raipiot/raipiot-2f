import type { ParamVo } from '@raipiot-2f/api'

import { useParamsColumns } from '@/features/system/params'
import Filter from '@/features/system/params/components/Filter'
import Modal from '@/features/system/params/components/RpModal'
import Table from '@/features/system/params/components/RpTableProps'
import { useSystemParamsSuspenseQuery } from '@/features/system/params/queries'

export const Route = createLazyFileRoute('/_base/system/params')({
  component: Params
})

function Params() {
  const { t } = useTranslation(['COMMON', 'SYSTEM/PARAMS'])

  const { pageParams, setPageParams } = usePagination()

  const { data, isPending } = useSystemParamsSuspenseQuery(pageParams)
  const { open, toggle } = useModal()
  const [modalMode, , setModalMode] = useToggle({
    initialValue: 'view',
    reverseValue: 'edit'
  })
  const [targetParam, setTargetParam] = useState<ParamVo | null>(null)

  const ModalContent = useMemo(() => {
    if (modalMode === 'edit') {
      return <div>edit</div>
    }
    return (
      <ADescriptions className="mt-12">
        <ADescriptions.Item label={t('SYSTEM/PARAMS:PARAMS.NAME')}>
          {targetParam?.paramName}
        </ADescriptions.Item>
        <ADescriptions.Item label={t('SYSTEM/PARAMS:PARAMS.KEY')}>
          {targetParam?.paramKey}
        </ADescriptions.Item>
        <ADescriptions.Item label={t('SYSTEM/PARAMS:PARAMS.VALUE')}>
          {targetParam?.paramValue}
        </ADescriptions.Item>
      </ADescriptions>
    )
  }, [modalMode, t, targetParam])

  const wrapperAction =
    (mode: 'edit' | 'view') =>
    // 修改目前查看或编辑的数据和模式
    (param: ParamVo) => {
      setModalMode(mode)
      toggle()
      setTargetParam(param)
    }

  const columns = useParamsColumns({
    handleEdit: wrapperAction('edit'),
    handleView: wrapperAction('view')
  })

  return (
    <div className="px-2">
      {/* 搜索过滤 */}
      <Filter />
      {/* 表格 */}
      <Table
        rowKey="id"
        columns={columns}
        rawData={data}
        loading={isPending}
        setPageParams={setPageParams}
        pageParams={pageParams}
      />

      {/* 编辑模态框 */}
      <Modal
        open={open}
        title={t(modalMode === 'edit' ? 'EDIT' : 'VIEW')}
        onCancel={toggle}
        onOk={toggle}
      >
        {ModalContent}
      </Modal>
    </div>
  )
}
