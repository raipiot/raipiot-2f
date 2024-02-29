import type { PageDto } from '@raipiot-2f/api'

export class PageUtils {
  static readonly DEFAULT_PAGE_SIZE = 10

  static #defaultValues: PageDto = {
    current: 1,
    size: this.DEFAULT_PAGE_SIZE
  }

  /**
   * 初始化分页参数
   * @param params 额外参数
   */
  static initParams<T>(params?: Partial<T>) {
    return { ...this.#defaultValues, ...params } as T
  }

  /**
   * 格式化分页参数
   * @param params 额外参数
   * @param formatter 格式化函数
   */
  static formatParams<T extends PageDto, D extends object = Record<string, unknown>>(
    params: D,
    formatter?: (draft: D) => T
  ): T {
    const target = formatter ? formatter(params) : params
    return { ...this.#defaultValues, ...target } as T
  }
}
