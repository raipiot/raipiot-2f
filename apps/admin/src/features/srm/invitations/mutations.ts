import type { InvitationSubmitDto } from '@raipiot-2f/api'

import { invalidateListQuery } from './invalidates'

export const useSubmitMutation = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()
  return useMutation({
    mutationFn: (data: InvitationSubmitDto) => invitationsAPI.submit(data),
    onSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
      invalidateListQuery()
    }
  })
}
