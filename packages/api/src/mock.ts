import type { Page } from '.'

export const mockEntity = <T>(data: T): T => data

export const mockEntities = <T>(...data: T[]): T[] => data

export const mockList = <T>(...data: T[]): Page<T> => ({
  records: [...data.map((i) => mockEntity<T>(i))],
  current: 1,
  size: 10,
  total: 1,
  pages: 1
})

export const timeoutResolve = (second: number = 1) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, second * 1000)
  })
