export class Page<T = any> {
  current: number

  size: number

  total: number

  records: T[] = []

  constructor(page?: Page<T>) {
    Object.assign(this, page)
  }
}
