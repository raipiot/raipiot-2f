import type { ParamPageDto } from '@raipiot-2f/api'

export const PARAMS_QK = 'system:params'

export const PARAM_QK = 'system:param'

export const paramsQK = (params?: ParamPageDto) => [PARAMS_QK, params]

export const paramQK = (id?: string) => [PARAM_QK, { id }]
