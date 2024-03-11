import type { ParamPageDto, ParamSubmitDto } from '@raipiot-2f/api'

export interface ParamSearchFormModel extends Pick<ParamPageDto, 'paramName' | 'paramKey'> {}

export interface ParamSubmitFormModel extends ParamSubmitDto {}
