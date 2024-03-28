import type { LocalSupplierPageDto, SupplierPageDto } from '@raipiot-2f/api'

export const LIST_QK = 'srm:suppliers:list'

export const DETAIL_QK = 'srm:suppliers:detail'

export const CONTACT_DETAIL_QK = 'srm:suppliers:contact-detail'

export const ADDRESS_DETAIL_QK = 'srm:suppliers:address-detail'

export const BANK_DETAIL_QK = 'srm:suppliers:bank-detail'

export const INVOICE_DETAIL_QK = 'srm:suppliers:invoice-detail'

export const FINANCE_DETAIL_QK = 'srm:suppliers:finance-detail'

export const ATTACHMENT_DETAIL_QK = 'srm:suppliers:attachment-detail'

export const LOCAL_LIST_QK = 'srm:local-suppliers:list'

export const LOCAL_DETAIL_QK = 'srm:local-suppliers:detail'

export const listQK = (params: SupplierPageDto) => [LIST_QK, params]

export const detailQK = (id: string) => [DETAIL_QK, id]

export const contactDetailQK = (id: string) => [CONTACT_DETAIL_QK, id]

export const addressDetailQK = (id: string) => [ADDRESS_DETAIL_QK, id]

export const bankDetailQK = (id: string) => [BANK_DETAIL_QK, id]

export const invoiceDetailQK = (id: string) => [INVOICE_DETAIL_QK, id]

export const financeDetailQK = (id: string) => [FINANCE_DETAIL_QK, id]

export const attachmentDetailQK = (id: string) => [ATTACHMENT_DETAIL_QK, id]

export const localListQK = (params: LocalSupplierPageDto) => [LOCAL_LIST_QK, params]

export const localDetailQK = (id: string) => [LOCAL_DETAIL_QK, id]
