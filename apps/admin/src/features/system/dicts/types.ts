import type { SystemDictPageDto, SystemDictSubmitDto } from '@raipiot-2f/api'

export interface SystemDictSearchFormModel extends Pick<SystemDictPageDto, 'code' | 'dictValue'> {}

export interface SystemDictSubmitFormModel extends Omit<SystemDictSubmitDto, 'isSealed'> {
  isSealed?: boolean
  parentName?: string
}
