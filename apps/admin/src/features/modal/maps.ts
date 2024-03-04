import type { ModalType } from './types'

const t = i18n.getFixedT(null, 'COMMON')

export const modalTitleMap = new Map<ModalType, () => string>([
  ['create', () => t('CREATE')],
  ['edit', () => t('EDIT')],
  ['read', () => t('DETAIL')],
  ['closed', () => '']
])
