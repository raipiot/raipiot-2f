export class FormatUtils {
  /**
   * 转化为数据库存储的 0 或 1 布尔类型
   * @param value
   * @returns number
   * @example
   * FormatUtils.toDbNum(true) => 1
   * FormatUtils.toDbNum(false) => 0
   * FormatUtils.toDbNum("1") => 1
   * FormatUtils.toDbNum("0") => 0
   * FormatUtils.toDbNum(1) => 1
   * FormatUtils.toDbNum(0) => 0
   * FormatUtils.toDbNum("true") => 1
   * FormatUtils.toDbNum("false") => 0
   */
  static toDbNum(value: unknown): number {
    if (typeof value === 'number') {
      return value === 1 ? 1 : 0
    }
    if (typeof value === 'string') {
      return value === '1' || value === 'true' ? 1 : 0
    }
    if (typeof value === 'boolean') {
      return value ? 1 : 0
    }
    return 0
  }
}
