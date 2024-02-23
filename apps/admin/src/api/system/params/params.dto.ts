export class ParamsPageDto extends PageDto {
  paramsName?: string

  paramsKey?: string

  constructor(paramsPageDto?: ParamsPageDto) {
    const { paramsKey, paramsName, ...pageDto } = paramsPageDto ?? {}
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
export interface IParamsPageDto extends IPageDto {
  paramsName?: string
  paramsKey?: string
}
