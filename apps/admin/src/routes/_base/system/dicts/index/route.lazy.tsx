import type { DictPageDto, DictVo } from '@raipiot-2f/api'
import type { FormItemProps } from 'antd'

import { TableLayout } from '@/features/layouts'
import type { DictSearchFormModel, DictSubmitFormModel } from '@/features/system/dicts'
import {
  SystemDictDetail,
  useDictsColumns,
  useDictsModalForm,
  useDictsSearchForm,
  useSystemDictRemoveMutation,
  useSystemDictsSuspenseQuery,
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

  const responsive = useResponsive()

  const {
    data: { records, total },
    refetch
  } = useSystemDictsSuspenseQuery(PageUtils.mergeParams(pageParams))
  const { mutateAsync: removeMutateAsync, isPending: isRemovePending } =
    useSystemDictRemoveMutation()
  const { mutateAsync: submitMutateAsync, isPending: isSubmitPending } =
    useSystemDictSubmitMutation()

  useEffect(() => clearSelectedRowKeys(), [isPending, clearSelectedRowKeys])

  const computedModalWidth = () => {
    if (!responsive.sm) {
      return '90%'
    }
    if (modal.type === 'read') {
      return '60%'
    }
    return '75%'
  }

  return (
    <TableLayout<DictVo, DictSearchFormModel>
      headerProps={{
        renderOperate: (
          <AButton
            type="primary"
            onClick={() => {
              modalForm.resetFields()
              modal.openCreate()
            }}
          >
            {t('CREATE')}
          </AButton>
        )
      }}
      searchBarProps={{
        form: searchForm,
        formItems: searchFormItems,
        onSearch: (values) =>
          startTransition(() => setPageParams(PageUtils.mergeParams(pageParams, values)))
      }}
      tableProps={{
        rowKey: (record) => record.id!,
        rowSelection,
        columns,
        dataSource: records,
        pagination: { ...pagination, total }
      }}
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
      modalProps={{
        open: modal.open,
        title: modal.getTitle(),
        width: computedModalWidth(),
        confirmLoading: isSubmitPending,
        onOk: modalForm.submit,
        onCancel: modal.toggle,
        footer: modal.isRead ? null : undefined,
        children: (
          <AForm<DictSubmitFormModel>
            name="modal"
            layout="horizontal"
            form={modalForm}
            initialValues={{
              sort: 1,
              isSealed: false
            }}
            onFinish={async (values) => {
              await submitMutateAsync({
                ...values,
                isSealed: FormatUtils.toDbNum(values.isSealed)
              })
              modalForm.resetFields()
              modal.toggle()
            }}
            labelCol={{ span: 6 }}
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
        )
      }}
    />
  )
}
