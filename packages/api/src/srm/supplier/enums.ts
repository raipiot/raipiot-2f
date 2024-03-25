export enum RelegationStatus {
  UPGRADE = '0', // 升级
  DOWNGRADE = '1' // 降级
}

export enum QueryDimension {
  SUPPLIER_BASE = '1', // 供应商 + 基地
  SUPPLIER_BASE_CATEGORY = '2', // 供应商 + 基地 + 品类
  SUPPLIER_BASE_CATEGORY_MATERIAL = '3' // 供应商 + 基地 + 品类 + 物料
}

export enum LifecycleStage {
  REGISTER = '1', // 注册
  PREMOTE = '2', // 推荐
  POTENTIAL = '3', // 潜在
  VALID = '4', // 合格
  DISUSE = '5' // 淘汰
}
