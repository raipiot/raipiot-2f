import type { SystemDictPageDto } from '@raipiot-2f/api'

import type { SystemDictCode } from './types'

export const LIST_QK = 'system:dicts'

export const DETAIL_QK = 'system:dict'

export const TREE_QK = 'system:dict-tree'

export const SELECT_QK = 'system:dict-select'

export const listQK = (params?: SystemDictPageDto) => [LIST_QK, params]

export const detailQK = (id?: string) => [DETAIL_QK, { id }]

export const treeQK = (code?: SystemDictCode) => [TREE_QK, code]

// 字典选择数据查询key
export const selectQK = (code?: SystemDictCode) => [SELECT_QK, code]
