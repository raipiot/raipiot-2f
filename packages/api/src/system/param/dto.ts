import { PageDto } from '../../types'

export class ParamPageDto extends PageDto {
  paramsName?: string

  paramsKey?: string

  constructor(paramPageDto?: ParamPageDto) {
    const { paramsKey, paramsName, ...pageDto } = paramPageDto ?? {}
    super(pageDto)
    Object.assign(this, { paramsKey, paramsName })
  }
}

export interface ParamsSubmitDto {
  paramName: string
  paramKey: string
  paramValue: string
}

interface IPageDto {
  size: number
  current: number
}

export interface IParamPageDto extends IPageDto {
  paramsName?: string
  paramsKey?: string
}
