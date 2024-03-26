import type { InvitationVo } from '@raipiot-2f/api'

export const useColumns = () => {
  const { createColumns } = useTableCreator<InvitationVo>()

  return createColumns([
    {
      title: '邀请编码',
      dataIndex: 'invitationCode',
      custom: (value, record) => ({
        value,
        link: {
          to: '/srm/invitations/$id/detail',
          params: { id: record?.id }
        }
      })
    },
    { title: '邀约状态', dataIndex: 'state' },
    { title: '发起公司', dataIndex: 'fromCompany' },
    { title: '被邀约企业编码', dataIndex: 'invitationCode' },
    { title: '被邀约供应商名称', dataIndex: 'toCompany' },
    { title: '发出邀请时间', dataIndex: 'createTime' },
    { title: '发出邀请人', dataIndex: 'createUser' }
  ])
}
