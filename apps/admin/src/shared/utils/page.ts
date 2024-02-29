import type { PageDto } from '@raipiot-2f/api'

export class PageUtils {
  static readonly DEFAULT_PAGE_SIZE = 10

  static #defaultValues: PageDto = {
    current: 1,
    size: this.DEFAULT_PAGE_SIZE
  }

  static formatParams<T extends PageDto>(params?: any): T {
    return { ...this.#defaultValues, ...params }
  }
}
