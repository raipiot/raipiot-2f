import type { DictPageDto, DictVo } from '@raipiot-2f/api'
import type { FormItemProps } from 'antd'

import type { DictSubmitFormModel } from '@/features/system/dicts'
import {
  SystemDictDetail,
  systemDictsQueryOptions,
  useDictsColumns,
  useDictsModalForm,
  useDictsSearchForm,
  useSystemDictRemoveMutation,
  useSystemDictSubmitMutation
} from '@/features/system/dicts'

export const Route = createLazyFileRoute('/_base/system/dicts/')({
  component: SystemDicts
})

function SystemDicts() {
  const { t } = useTranslation()

  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<DictPageDto>()
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<DictVo>()
  const modal = useModal()
  const { searchForm, searchFormItems } = useDictsSearchForm()
  const { modalForm, modalFormItems } = useDictsModalForm()
  const { columns } = useDictsColumns({ modal, form: modalForm })

  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(systemDictsQueryOptions(PageUtils.mergeParams(pageParams)))
  const { mutateAsync: removeMutateAsync, isPending: isRemovePending } =
    useSystemDictRemoveMutation()
  const { mutateAsync: submitMutateAsync, isPending: isSubmitPending } =
    useSystemDictSubmitMutation()

  useEffect(() => clearSelectedRowKeys(), [isPending, clearSelectedRowKeys])

  return (
    // 页面容器
    <RpPageContainer
      pageHeaderProps={{
        // 操作区
        operate: (
          <RpCreateBtn
            onClick={() => {
              modalForm.resetFields()
              modal.openCreate()
            }}
          />
        )
      }}
    >
      {/* 搜索区域 */}
      <RpSearchBar
        // 搜索表单
        formProps={{ form: searchForm }}
        // 表单配置项
        formItems={searchFormItems}
        // 事件：搜索
        onSearch={(values) =>
          startTransition(() => setPageParams(PageUtils.mergeParams(pageParams, values)))
        }
        // 事件：预渲染
        onPrefetch={(values) =>
          queryClient.prefetchQuery(
            systemDictsQueryOptions(PageUtils.mergeParams(pageParams, values))
          )
        }
      />
      {/* 表格 */}
      <RpTable<DictVo>
        rowKey={(record) => record.id!}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={records}
        pagination={pagination({
          total,
          onPrefetch: (values) => queryClient.prefetchQuery(systemDictsQueryOptions(values))
        })}
        refreshLoading={isPending}
        onRefresh={() =>
          startTransition(() => {
            refetch()
          })
        }
        batchDeleteLoading={isRemovePending}
        onBatchDelete={(ids) =>
          removeMutateAsync(ids.join(), {
            onSuccess: clearSelectedRowKeys
          })
        }
      />
      {/* 弹窗 */}
      <RpModal
        type={modal.type}
        open={modal.open}
        title={modal.getTitle()}
        confirmLoading={isSubmitPending}
        onOk={modalForm.submit}
        onCancel={modal.close}
        footer={modal.isRead ? null : undefined}
      >
        <AForm<DictSubmitFormModel>
          name="modal"
          layout="horizontal"
          form={modalForm}
          labelCol={{ span: 6 }}
          initialValues={{
            sort: 1,
            isSealed: false
          }}
          onFinish={async () => {
            const values = modalForm.getFieldsValue(true)
            await submitMutateAsync({
              ...values,
              isSealed: FormatUtils.toDbNum(values.isSealed)
            })
            modal.close()
          }}
        >
          {(modal.isCreate || modal.isEdit) && (
            <ARow gutter={24}>
              {modalFormItems &&
                modalFormItems.map((item) => {
                  const { type } = item
                  if (type === 'custom') {
                    return typeof item.render === 'function' ? item.render() : item.render
                  }
                  const { key, colProps, formItemProps } = item
                  return (
                    <ACol
                      key={key.toString()}
                      {...colProps}
                    >
                      <AForm.Item
                        name={key as FormItemProps['name']}
                        {...formItemProps}
                      >
                        {type === 'input' && <AInput {...item.inputProps} />}
                        {type === 'select' && <ASelect {...item.selectProps} />}
                        {type === 'tree-select' && <ATreeSelect {...item.treeSelectProps} />}
                        {type === 'cascader' && <ACascader {...item.cascaderProps} />}
                        {type === 'date-picker' && <ADatePicker {...item.datePickerProps} />}
                        {type === 'input-number' && <AInputNumber {...item.inputNumberProps} />}
                        {type === 'switch' && <ASwitch {...item.switchProps} />}
                        {type === 'button' && (
                          <AButton {...item.buttonProps}>{item.buttonProps?.children}</AButton>
                        )}
                        {type === 'form-item' &&
                          (typeof item.render === 'function' ? item.render() : item.render)}
                      </AForm.Item>
                    </ACol>
                  )
                })}
            </ARow>
          )}
          {modal.isRead && (
            <Suspense
              fallback={
                <ASkeleton
                  active
                  round
                  paragraph={{ rows: 10 }}
                />
              }
            >
              <SystemDictDetail id={modal.meta} />
            </Suspense>
          )}
        </AForm>
      </RpModal>
    </RpPageContainer>
  )
}
