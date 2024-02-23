/**
 * 生成基于 interface 的 key 的同名键值对对象
 * @returns {}
 */
export function createRecord<T>(): Record<keyof T, keyof T> {
  return new Proxy({} as Record<keyof T, keyof T>, {
    get: (target, prop: any) => prop
  })
}
