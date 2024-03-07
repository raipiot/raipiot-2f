import type { DictPageDto } from '@raipiot-2f/api'

export const SYSTEM_DICTS_QK = 'system:dicts'

export const SYSTEM_DICT_QK = 'system:dict'

export const SYSTEM_DICT_VALUES_QK = 'system:dict-values'

export const SYSTEM_DICT_TREE_QK = 'system:dict-tree'

export const systemDictsQK = (params?: DictPageDto) => [SYSTEM_DICTS_QK, params]

export const systemDictQK = (id?: string) => [SYSTEM_DICT_QK, { id }]

export const systemDictValuesQK = (params?: DictPageDto) => [SYSTEM_DICT_VALUES_QK, params]

export const systemDictTreeQK = () => [SYSTEM_DICT_TREE_QK]