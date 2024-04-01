import type { PageDto } from '@raipiot-2f/api'

export class PageUtils {
  static readonly DEFAULT_PAGE_SIZE = 20

  static #defaultValues: PageDto = {
    current: 1,
    size: this.DEFAULT_PAGE_SIZE
  }

  /**
   * 初始化分页参数
   * @param params 额外参数
   */
  static initParams<T extends PageDto>(params?: object) {
    return { ...this.#defaultValues, ...params } as T
  }

  /**
   * 格式化分页参数
   * @param params 额外参数
   * @param formatter 格式化函数
   */
  static mergeParams<T extends PageDto, D extends Record<string, any> = object>(
    params: T,
    searchParams?: D,
    formatter?: (draft: D) => D
  ): T {
    if (!searchParams) {
      return params
    }
    const target = formatter ? formatter(searchParams) : searchParams
    return { ...params, ...target } as T
  }
}
