import type { SystemDictPageDto } from '@raipiot-2f/api'

export const BIZ_DICTS_QK = 'biz:dicts'

export const BIZ_DICT_QK = 'biz:dict'

export const BIZ_DICT_VALUES_QK = 'biz:dict-values'

export const BIZ_DICT_TREE_QK = 'biz:dict-tree'

export const bizDictsQK = (params?: SystemDictPageDto) => [BIZ_DICTS_QK, params]

export const bizDictQK = (id?: string) => [BIZ_DICT_QK, { id }]

export const bizDictValuesQK = (params?: SystemDictPageDto) => [BIZ_DICT_VALUES_QK, params]

export const bizDictTreeQK = () => [BIZ_DICT_TREE_QK]
