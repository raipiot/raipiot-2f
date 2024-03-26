import type { InvitationVo } from '@raipiot-2f/api'

import { useForm } from './hooks'

export function DetailPage() {
  const { form, formItems } = useForm()
  const { id } = useParams({ from: '/_base/srm/invitations/$id/detail' })
  const { data } = useSuspenseQuery(Invitations.detailQO(id))

  return (
    <RpPageContainer>
      <ACard>
        <RpDynamicForm<InvitationVo>
          form={form}
          items={formItems}
          mode="edit"
          initialValues={data}
        />
      </ACard>
    </RpPageContainer>
  )
}
