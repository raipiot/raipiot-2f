import type { PermissionsSubmitDto } from '@raipiot-2f/api'
import type { TabsProps } from 'antd'

import { Perms } from '../../perms'
import { usePermissionsModalContext } from '../context'

export function PermissionsModal() {
  const { permissionsForm, permissionsModal } = usePermissionsModalContext()
  const { t } = useTranslation('SYSTEM/ROLES')
  // 异步提交
  const [activeKey, setActiveKey] = useState('1')

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: t('PERMISSIONS.MENU'),
      children: (
        <div className={clsx('max-h-[60vh] overflow-y-auto')}>
          <AForm.Item
            name="menu"
            valuePropName="checkedKeys"
            trigger="onCheck"
          >
            <ATree
              checkable
              treeData={permissionsModal.meta?.tabsData.menu}
            />
          </AForm.Item>
        </div>
      ),
      forceRender: true
    },
    {
      key: '2',
      label: t('PERMISSIONS.DATA'),
      children: (
        <div className={clsx('max-h-[60vh] overflow-y-auto')}>
          <AForm.Item
            name="dataScope"
            valuePropName="checkedKeys"
            trigger="onCheck"
          >
            <ATree
              checkable
              treeData={permissionsModal.meta?.tabsData.dataScope}
            />
          </AForm.Item>
        </div>
      ),
      forceRender: true
    },
    {
      key: '3',
      label: t('PERMISSIONS.API'),
      children: (
        <div className={clsx('max-h-[60vh] overflow-y-auto')}>
          <AForm.Item
            name="apiScope"
            valuePropName="checkedKeys"
            trigger="onCheck"
          >
            <ATree
              checkable
              treeData={permissionsModal.meta?.tabsData.apiScope}
            />
          </AForm.Item>
        </div>
      ),
      forceRender: true
    }
  ]

  const { isPending, mutate } = Perms.useSubmitMutation()

  const afterClose = () => {
    permissionsForm.resetFields()
    setActiveKey('1')
  }

  return (
    <RpModal
      // 打开状态
      open={permissionsModal.open}
      // 标题
      title={t('PERMISSIONS.CONFIG')}
      // 确认按钮加载
      confirmLoading={isPending}
      // 事件：确认
      onOk={permissionsForm.submit}
      // 事件：取消
      onCancel={permissionsModal.close}
      afterClose={afterClose}
      // 底部区域
      footer={permissionsModal.isRead ? null : undefined}
    >
      <RpForm
        form={permissionsForm}
        onFinish={() => {
          const values = permissionsForm.getFieldsValue(true)
          // 注意📢 需要转化数据结构
          const upload = {
            apiScopeIds: values.apiScope,
            dataScopeIds: values.dataScope,
            menuIds: values.menu,
            roleIds: values.roleIds
          } as unknown as PermissionsSubmitDto
          return mutate(upload, {
            onSuccess: permissionsModal.close
          })
        }}
      >
        <ATabs
          animated
          items={items}
          onChange={setActiveKey}
          activeKey={activeKey}
        />
      </RpForm>
    </RpModal>
  )
}
