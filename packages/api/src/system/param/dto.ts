import type { PageDto } from '../../types'

export interface ParamPageDto extends PageDto {
  paramsName?: string
  paramsKey?: string
}

export interface ParamsSubmitDto {
  paramName: string
  paramKey: string
  paramValue: string
}
