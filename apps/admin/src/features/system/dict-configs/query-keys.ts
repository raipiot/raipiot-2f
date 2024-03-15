import type { SystemDictPageDto } from '@raipiot-2f/api'

export const LIST_QK = 'system:dict-configs'

export const listQK = (params?: SystemDictPageDto) => [LIST_QK, params]
