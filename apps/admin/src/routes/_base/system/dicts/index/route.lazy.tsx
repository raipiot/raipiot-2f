import type { DictPageDto, DictVo } from '@raipiot-2f/api'
import type { FormItemProps } from 'antd'

import { TableLayout } from '@/features/layouts'
import type { DictSearchFormModel, DictSubmitFormModel } from '@/features/system/dicts'
import {
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

  const { pageParams, pagination, isPending, onSearch } = usePagination<DictPageDto>()
  const { rowSelection, clearSelectedRowKeys } = useRowSelection<DictVo>()
  const { open, toggle, setModalType, getModalTitle } = useModal()
  const { columns } = useDictsColumns()
  const { searchForm, searchFormItems } = useDictsSearchForm()
  const { modalForm, modalFormItems } = useDictsModalForm()

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

  return (
    <TableLayout<DictVo, DictSearchFormModel>
      headerProps={{
        renderOperate: (
          <AButton
            type="primary"
            onClick={() => {
              setModalType('create')
              toggle()
            }}
          >
            {t('CREATE')}
          </AButton>
        )
      }}
      searchBarProps={{
        form: searchForm,
        formItems: searchFormItems,
        onSearch
      }}
      tableProps={{
        rowKey: (record) => record.id!,
        rowSelection,
        columns,
        dataSource: records,
        pagination: { ...pagination, total }
      }}
      refreshLoading={isPending}
      onRefresh={refetch}
      batchDeleteLoading={isRemovePending}
      onBatchDelete={(ids) =>
        removeMutateAsync(ids.join(), {
          onSuccess: () => clearSelectedRowKeys()
        })
      }
      modalProps={{
        open,
        title: getModalTitle(),
        width: responsive.sm ? '75%' : '90%',
        confirmLoading: isSubmitPending,
        onOk: () => modalForm.submit(),
        onCancel: () => toggle(),
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
              toggle()
            }}
            labelCol={{ span: 6 }}
          >
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
          </AForm>
        )
      }}
    />
  )
}
