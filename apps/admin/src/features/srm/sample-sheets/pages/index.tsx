import type { OmitCurrentAndSize, SampleSheetsVo, SampleSheetVo } from '@raipiot-2f/api'

import { usePublishMutation, useRemoveMutation } from '../mutations'
import { queries } from '../queries'
import {
  SampleSheetsQueryDimension,
  type SampleSheetsSearchFormProps,
  SampleSheetTabKey
} from '../types'
import { Operate } from './components'

export function Page() {
  // 权限：供货商或服务商身份
  // Search Form
  const [searchForm] = AForm.useForm()
  const { createSearchForm } = useFormCreator<OmitCurrentAndSize<SampleSheetsSearchFormProps>>()
  const searchFormItems = createSearchForm([
    {
      type: 'select',
      formItemProps: {
        label: '查询维度',
        name: 'queryDimension'
      },
      selectProps: {
        options: [
          {
            label: '按单号维度查询',
            value: SampleSheetsQueryDimension.orderNo
          },
          {
            label: '按明细查询',
            value: SampleSheetsQueryDimension.detail
          }
        ]
      }
    },
    {
      type: 'range-picker',
      formItemProps: {
        label: '日期范围',
        name: 'dateRange'
      },
      rangePickerProps: {
        allowClear: true
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '供货商',
        name: 'supplier'
      },
      inputProps: {
        placeholder: '供货商编码、名称',
        allowClear: true
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '单号',
        name: 'orderNo'
      },
      inputProps: {
        placeholder: '单号',
        allowClear: true
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '客户',
        name: 'customer'
      },
      inputProps: {
        placeholder: '客户编码、名称',
        allowClear: true
      }
    }
  ])

  // Table Columns
  const { createColumns } = useTableCreator<SampleSheetVo>()
  const columns = createColumns([
    {
      dataIndex: 'orderNo',
      title: '申请单号',
      width: 150,
      custom: (value, record) => ({
        value,
        link: {
          to: '/srm/sample-sheets/sheet/$id',
          params: { id: record?.id }
        }
      })
    },
    {
      dataIndex: 'status',
      title: '状态'
    },
    {
      title: '发起方',
      dataIndex: 'initiator'
    },
    {
      title: '库存组织名称',
      dataIndex: 'inventoryOrganization'
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
      title: '公司名称',
      dataIndex: 'companyName'
    },
    {
      title: '业务实体名称',
      dataIndex: 'businessEntityName'
    },
    {
      title: '供应商类型',
      dataIndex: 'supplierType'
    },
    {
      title: '原厂名称',
      dataIndex: 'originalFactoryName'
    },
    {
      title: '送样类型',
      dataIndex: 'sampleType'
    },
    {
      title: '申请人',
      dataIndex: 'applicant'
    },
    {
      title: '接样人',
      dataIndex: 'sampleReceiver'
    },
    {
      title: '接样人电话',
      dataIndex: 'sampleReceiverPhone'
    },
    {
      title: '送样地址',
      dataIndex: 'sampleAddress'
    },
    {
      title: '送样人',
      dataIndex: 'sampleSender'
    },
    {
      title: '送样人电话',
      dataIndex: 'sampleSenderPhone'
    },
    {
      title: '送样方式',
      dataIndex: 'sampleMethod'
    },
    {
      title: '快递单号',
      dataIndex: 'expressNo'
    },
    {
      title: '预计送达时间',
      dataIndex: 'estimatedArrivalTime'
    },
    {
      title: '紧急程度',
      dataIndex: 'urgency'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime'
    }
  ])

  // selection
  const { rowSelection, clearSelectedRowKeys, selectedRowKeys } = useRowSelection<SampleSheetVo>()

  // Delete mutation
  const { mutateAsync, isPending: isRemovePending } = useRemoveMutation()
  // Publish mutation
  const { mutateAsync: publishMutateAsync, isPending: isPublishPending } = usePublishMutation()

  // Table Pagination
  const { pageParams, pagination, setPageParams, isPending, startTransition } = usePagination<
    SampleSheetsVo & { tabKey: SampleSheetTabKey }
  >({
    tabKey: SampleSheetTabKey.ALL
  })

  // Table data
  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(queries.listOP(PageUtils.mergeParams(pageParams)))

  // Clear selected row keys
  useEffect(clearSelectedRowKeys, [isPending, clearSelectedRowKeys])

  return (
    <RpPageContainer
      pageHeaderProps={{
        // 操作区
        operate: <Operate tabKey={pageParams.tabKey} />
      }}
    >
      <ATabs
        defaultActiveKey={pageParams.tabKey}
        onChange={(tabKey) =>
          startTransition(() =>
            setPageParams((prev) => ({ ...prev, tabKey: tabKey as SampleSheetTabKey }))
          )
        }
        items={[
          {
            key: SampleSheetTabKey.ALL,
            label: '全部'
          },
          {
            key: SampleSheetTabKey.NEW,
            label: '新建'
          },
          {
            key: SampleSheetTabKey.FEEDBACK,
            label: '待反馈/已确认'
          },
          {
            key: SampleSheetTabKey.REJECTED,
            label: '已退回'
          },
          {
            key: SampleSheetTabKey.CONFIRM,
            label: '待确认'
          },
          {
            key: SampleSheetTabKey.CONFIRMED,
            label: '已确认'
          },
          {
            key: SampleSheetTabKey.CLOSED,
            label: '已关闭'
          }
        ]}
      />

      <RpSearchBar
        formProps={{
          form: searchForm,
          initialValues: {
            queryDimension: SampleSheetsQueryDimension.orderNo
          }
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

      <RpBasicTable<SampleSheetVo>
        rowKey={(record) => record.id}
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
          pageParams.tabKey === SampleSheetTabKey.NEW && (
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
          )
        }
      />
    </RpPageContainer>
  )
}
