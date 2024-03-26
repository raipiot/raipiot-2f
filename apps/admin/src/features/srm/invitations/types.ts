import type { InvitationPageDto } from '@raipiot-2f/api'

export interface InvitationSearchFormModel extends Omit<InvitationPageDto, 'size' | 'current'> {}
