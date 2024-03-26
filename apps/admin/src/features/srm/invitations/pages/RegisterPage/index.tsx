import type { InvitationSubmitDto } from '@raipiot-2f/api'

import { useSubmitMutation } from '../../mutations'
import { useForm } from './hooks'

interface RegisterPageProps {
  isReadOnly?: boolean
}

export function RegisterPage(props: RegisterPageProps) {
  const { isReadOnly } = props
  const navigate = useNavigate()
  const { form, formItems } = useForm()
  const { mutateAsync, isPending } = useSubmitMutation()

  return (
    <RpPageContainer
      pageHeaderProps={{
        operate: !isReadOnly && (
          <RpButton
            variant="submit"
            loading={isPending}
            disabled={isPending}
            onClick={form.submit}
          />
        ),
        backBtn: true
      }}
    >
      <ACard>
        <RpDynamicForm<InvitationSubmitDto>
          form={form}
          items={formItems}
          mode={isReadOnly ? 'read' : 'edit'}
          onFinish={async () => {
            const values = form.getFieldsValue(true)
            await mutateAsync(values, {
              onSuccess: () =>
                navigate({
                  to: '/srm/invitations'
                })
            })
          }}
        />
      </ACard>
    </RpPageContainer>
  )
}
