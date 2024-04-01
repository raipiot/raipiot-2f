import type {
  OmitCurrentAndSize,
  SampleSheetsByOriginPageDto,
  SampleSheetsByOriginVo,
  SampleSheetsPageDto
} from '@raipiot-2f/api'

import { usePublishMutation, useRemoveMutation } from '../../mutations'
import { queries } from '../../queries'
import { SampleSheetTabKey } from '../../types'
import { Operate } from '../components'

export function CreateByOriginPage() {
  // Search Form
  const [searchForm] = AForm.useForm()
  const { createSearchForm } = useFormCreator<OmitCurrentAndSize<SampleSheetsByOriginPageDto>>()
  const searchFormItems = createSearchForm([
    {
      type: 'input',
      formItemProps: {
        label: '寻源单号',
        name: 'orderNo'
      },
      inputProps: {
        placeholder: '请输入寻源单号',
        allowClear: true
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '供应商名称',
        name: 'supplierName'
      },
      inputProps: {
        placeholder: '请输入供应商名称',
        allowClear: true
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '物料名称',
        name: 'materialName'
      },
      inputProps: {
        placeholder: '请输入物料名称',
        allowClear: true
      }
    }
  ])

  // Table Columns
  const { createColumns } = useTableCreator<SampleSheetsByOriginVo>()
  const columns = createColumns([
    {
      title: '寻源单号',
      dataIndex: 'orderNo'
    },
    {
      title: '供应商编码',
      dataIndex: 'supplierCode'
    },
    {
      title: '供应商名称',
      dataIndex: 'supplierName'
    },
    {
      title: '是否暂挂',
      dataIndex: 'isHangUp',
      custom: (value) => ({
        booleanValue: value
      })
    },
    {
      title: 'ERP供应商编码',
      dataIndex: 'erpSupplierCode'
    },
    {
      title: '物料描述',
      dataIndex: 'materialDescription'
    },
    {
      title: '物料编码',
      dataIndex: 'materialCode'
    },
    {
      title: '物料分类',
      dataIndex: 'materialClassification'
    },
    {
      title: '币种',
      dataIndex: 'currency'
    },
    {
      title: '数量',
      dataIndex: 'quantity'
    },
    {
      title: '税率',
      dataIndex: 'taxRate'
    },
    {
      title: '单价',
      dataIndex: 'unitPrice'
    },
    {
      title: '交货日期',
      dataIndex: 'deliveryDate'
    },
    {
      title: '公司',
      dataIndex: 'company'
    },
    {
      title: '业务实体',
      dataIndex: 'businessEntity'
    },
    {
      title: '采购组织',
      dataIndex: 'purchasingOrganization'
    },
    {
      title: '库存组织',
      dataIndex: 'inventoryOrganization'
    }
  ])

  // selection
  const { rowSelection, clearSelectedRowKeys, selectedRowKeys } =
    useRowSelection<SampleSheetsByOriginVo>()

  // Delete mutation
  const { mutateAsync, isPending: isRemovePending } = useRemoveMutation()
  // Publish mutation
  const { mutateAsync: publishMutateAsync, isPending: isPublishPending } = usePublishMutation()

  // Table Pagination
  const { pageParams, pagination, setPageParams, isPending, startTransition } =
    usePagination<SampleSheetsPageDto>()

  // Table data
  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(queries.originListOP(PageUtils.mergeParams(pageParams)))

  // Clear selected row keys
  useEffect(clearSelectedRowKeys, [isPending, clearSelectedRowKeys])

  return (
    <RpPageContainer
      pageHeaderProps={{
        // 操作区
        operate: <Operate tabKey={SampleSheetTabKey.NEW} />
      }}
    >
      <RpSearchBar
        formProps={{
          form: searchForm
        }}
        formItems={searchFormItems}
        onSearch={(values) =>
          startTransition(() => setPageParams(PageUtils.mergeParams(pageParams, values)))
        }
        // 事件：预渲染
        onPrefetch={(values) =>
          queryClient.prefetchQuery(queries.listOP(PageUtils.mergeParams(pageParams, values)))
        }
      />

      <RpBasicTable<SampleSheetsByOriginVo>
        rowKey={(record) => record.orderNo}
        rowSelection={rowSelection}
        selectedRowKeys={selectedRowKeys}
        onRefresh={() =>
          startTransition(() => {
            refetch()
          })
        }
        pagination={pagination({
          total,
          onPrefetch: (values) => queryClient.prefetchQuery(queries.listOP(values))
        })}
        dataSource={records}
        columns={columns}
        onBatchDelete={() => {
          // 批量删除，成功后清空选中项
          mutateAsync(selectedRowKeys.join(','), {
            onSuccess: clearSelectedRowKeys
          })
        }}
        batchDeleteLoading={isRemovePending}
        refreshLoading={isPending}
        scroll={{ x: 3200 }}
        renderTableBatchOpeate={
          <RpButton
            disabled={isPublishPending}
            onClick={() => {
              // 批量发布
              publishMutateAsync(selectedRowKeys.join(','), {
                onSuccess: clearSelectedRowKeys
              })
            }}
            rootClassName="!mt-0"
          >
            批量发布
          </RpButton>
        }
      />
    </RpPageContainer>
  )
}
