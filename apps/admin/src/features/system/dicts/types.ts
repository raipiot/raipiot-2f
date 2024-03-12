import type { DictPageDto, DictSubmitDto } from '@raipiot-2f/api'

export interface DictSearchFormModel extends Pick<DictPageDto, 'code' | 'dictValue'> {}

export interface DictSubmitFormModel extends Omit<DictSubmitDto, 'isSealed'> {
  isSealed?: boolean
  parentName?: string
}
