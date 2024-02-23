import type { ParamsPageDto } from '@/api/system/params/params.dto'

export const genSystemParamsQK = (params: ParamsPageDto) => ['system:params', params]

export const genSystemParamQK = () => ['system:param']
