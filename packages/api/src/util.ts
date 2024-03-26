export function arrayFieldToString(obj: Record<string, any>) {
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      obj[key] = obj[key].join(',')
    }
  })
  return obj
}

export function stringToArrayFieldByKeys(
  obj: Record<string, any>,
  keys: string[],
  options?: {
    separator?: string
    formatter?: (value: string) => any
    filter?: (value: string, index?: number) => boolean
  }
) {
  const { separator, formatter, filter } = {
    separator: ',',
    formatter: (value: any) => value,
    filter: (_value: any, _index: number) => true,
    ...options
  }
  const cloneObject = structuredClone(obj)
  Object.keys(cloneObject).forEach((key) => {
    if (typeof cloneObject[key] === 'string' && keys.some((i) => i === key)) {
      cloneObject[key] = cloneObject[key].split(separator).filter(filter).map(formatter)
    }
  })
  return cloneObject
}
