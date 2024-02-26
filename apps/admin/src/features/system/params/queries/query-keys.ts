import type { ParamPageDto } from '@raipiot-2f/api'

export const genSystemParamsQK = (params: ParamPageDto) => ['system:params', params]

export const genSystemParamQK = () => ['system:param']
