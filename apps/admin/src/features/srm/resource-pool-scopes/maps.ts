import { ResourcePoolType } from '@raipiot-2f/api'

export const typeMap = new Map<ResourcePoolType, string>([
  [ResourcePoolType.BASE_ISOLATION, '基地隔离'],
  [ResourcePoolType.CATEGORY_ISOLATION, '品类隔离']
])
