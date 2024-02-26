/**
 * 生成基于 interface 的 key 的同名键值对对象
 */
export const genType = <T>(): Record<keyof T, keyof T> =>
  new Proxy({} as Record<keyof T, keyof T>, {
    get: (_, prop: any) => prop
  })
