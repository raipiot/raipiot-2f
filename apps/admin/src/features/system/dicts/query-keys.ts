import type { SystemDictPageDto } from '@raipiot-2f/api'

import type { SystemDictCode } from './enums'

export const SYSTEM_DICTS_QK = 'system:dicts'

export const SYSTEM_DICT_QK = 'system:dict'

export const SYSTEM_DICT_VALUES_QK = 'system:dict-values'

export const SYSTEM_DICT_TREE_QK = 'system:dict-tree'

export const systemDictsQK = (params?: SystemDictPageDto) => [SYSTEM_DICTS_QK, params]

export const systemDictQK = (id?: string) => [SYSTEM_DICT_QK, { id }]

export const systemDictValuesQK = (params?: SystemDictPageDto) => [SYSTEM_DICT_VALUES_QK, params]

export const systemDictTreeQK = (code?: SystemDictCode) => [SYSTEM_DICT_TREE_QK, code]
