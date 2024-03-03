import type { ParamPageDto } from '@raipiot-2f/api'

export const systemParamQK = () => ['system:param']

export const systemParamsQK = (params?: ParamPageDto) => ['system:params', params]
