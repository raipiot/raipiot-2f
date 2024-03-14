import type { ParamPageDto, ParamSubmitDto } from '@raipiot-2f/api'

export interface ParamSearchFormModel extends Omit<ParamPageDto, 'size' | 'current'> {}

export interface ParamSubmitFormModel extends ParamSubmitDto {}
