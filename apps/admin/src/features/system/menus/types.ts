import type { LazyMenuPageDto, MenuSubmitDto } from '@raipiot-2f/api'

export interface MenuSearchFormModel extends Pick<LazyMenuPageDto, 'code' | 'name' | 'alias'> {}

export interface MenuSubmitFormModel extends Omit<MenuSubmitDto, 'isOpen'> {
  isOpen?: boolean
}
