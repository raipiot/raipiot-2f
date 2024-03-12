import type { BizDictPageDto, BizDictSubmitDto } from '@raipiot-2f/api'

export interface BizDictSearchFormModel extends Pick<BizDictPageDto, 'code' | 'dictValue'> {}

export interface BizDictSubmitFormModel extends Omit<BizDictSubmitDto, 'isSealed'> {
  isSealed?: boolean
  parentName?: string
}
