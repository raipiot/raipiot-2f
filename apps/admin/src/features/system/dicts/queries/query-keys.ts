import type { DictPageDto } from '@raipiot-2f/api'

export const systemDictsQK = (params?: DictPageDto) => ['system:dicts', params]

export const systemDictQK = (id?: string) => ['system:dict', { id }]

export const systemDictValuesQK = (params?: DictPageDto) => ['system:dict-values', params]

export const systemDictTreeQK = () => ['system:dict-tree']
