export class R<T = any> {
  msg?: string

  data?: T

  constructor(r?: R<T>) {
    Object.assign(this, r)
  }
}
