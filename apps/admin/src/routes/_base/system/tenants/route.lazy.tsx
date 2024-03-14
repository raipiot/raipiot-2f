import type { TenantPageDto, TenantVo } from '@raipiot-2f/api'

import {
  tenantsQueryOptions,
  useTenantRemoveMutation,
  useTenantsColumns,
  useTenantsModalForm,
  useTenantsSearchForm,
  useTenantsSettingForm,
  useTenantSubmitMutation
} from '@/features/system/tenants'
import { SettingModal } from '@/features/system/tenants/components'
import { SettingModalContext } from '@/features/system/tenants/context'

export const Route = createLazyFileRoute('/_base/system/tenants')({
  component: Tenants
})

function Tenants() {
  const { t } = useTranslation('SYSTEM/TENANTS')
  // 分页器
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<TenantPageDto>()
  // 多选器：范型为列表行数据类型
  const { rowSelection, selectedRowKeys, clearSelectedRowKeys } = useRowSelection<TenantVo>()
  // 弹窗
  const modal = useModal()
  // 弹窗：授权配置
  const settingModal = useModal()
  // 搜索表单
  const { searchForm, searchFormItems } = useTenantsSearchForm()
  // 弹窗表单
  const { modalForm, modalFormItems } = useTenantsModalForm({ modal })
  // 表单：授权配置
  const { settingForm, settingFormItems } = useTenantsSettingForm()
  // 表格列
  const { columns } = useTenantsColumns({ modal, form: modalForm })

  // 异步查询：列表数据
  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(tenantsQueryOptions(PageUtils.mergeParams(pageParams)))
  // 异步删除
  const { mutateAsync: removeMutateAsync, isPending: isRemovePending } = useTenantRemoveMutation()
  // 异步提交
  const { mutateAsync: submitMutateAsync, isPending: isSubmitPending } = useTenantSubmitMutation()

  // 清空选中行
  useEffect(() => clearSelectedRowKeys(), [isPending, clearSelectedRowKeys])

  const settingModalContextValue = useMemo(
    () => ({
      modal: settingModal,
      form: settingForm,
      formItems: settingFormItems,
      selectedRowKeys,
      clearSelectedRowKeys
    }),
    [settingModal, settingForm, settingFormItems, selectedRowKeys, clearSelectedRowKeys]
  )

  return (
    // 页面容器
    <RpPageContainer
      pageHeaderProps={{
        // 操作区
        operate: (
          <RpButton
            variant="create"
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
          queryClient.prefetchQuery(tenantsQueryOptions(PageUtils.mergeParams(pageParams, values)))
        }
      />
      {/* 表格 */}
      <RpBasicTable<TenantVo>
        rowKey={(record) => record.id!}
        // 批量选择选项
        rowSelection={rowSelection}
        // 表格列
        columns={columns}
        // 表格数据
        dataSource={records}
        // 分页器
        pagination={pagination({
          total,
          // 事件：分页预渲染
          onPrefetch: (values) => queryClient.prefetchQuery(tenantsQueryOptions(values))
        })}
        // 刷新加载
        refreshLoading={isPending}
        // 事件：刷新
        onRefresh={() =>
          startTransition(() => {
            refetch()
          })
        }
        // 批量删除加载
        batchDeleteLoading={isRemovePending}
        // 事件：批量删除
        onBatchDelete={(ids) =>
          removeMutateAsync(ids.join(), {
            onSuccess: clearSelectedRowKeys
          })
        }
        scroll={{ x: 1500 }}
        renderTableOpeate={
          <ATooltip title={t('AUTH.CONFIG.TOOLTIP')}>
            <AButton disabled>{t('AUTH.CONFIG')}</AButton>
          </ATooltip>
        }
        renderTableBatchOpeate={
          <ATooltip title={t('AUTH.CONFIG.TOOLTIP')}>
            <AButton
              onClick={() => {
                settingForm.resetFields()
                settingModal.openEdit()
              }}
            >
              {t('AUTH.CONFIG')}
            </AButton>
          </ATooltip>
        }
      />
      {/* 模态框 */}
      <RpModal
        // 模态框类型
        type={modal.type}
        // 打开状态
        open={modal.open}
        // 标题
        title={modal.getTitle()}
        // 确认按钮加载
        confirmLoading={isSubmitPending}
        // 事件：确认
        onOk={modalForm.submit}
        // 事件：取消
        onCancel={modal.close}
        // 底部区域
        footer={modal.isRead ? null : undefined}
      >
        <RpDynamicForm
          name="modal"
          // 表单
          form={modalForm}
          // 表单配置项
          items={modalFormItems}
          // 表单模式
          mode={modal.type}
          // 表单初始值
          initialValues={{}}
          // 表单提交
          onFinish={async () => {
            const values = modalForm.getFieldsValue(true)
            await submitMutateAsync(
              { ...values },
              {
                onSuccess: modal.close
              }
            )
          }}
        />
      </RpModal>
      {/* 授权配置 */}
      <SettingModalContext.Provider value={settingModalContextValue}>
        <SettingModal />
      </SettingModalContext.Provider>
    </RpPageContainer>
  )
}
