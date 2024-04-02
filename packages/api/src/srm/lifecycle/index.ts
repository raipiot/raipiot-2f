import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import { mockEntity, mockList } from '../../mock'
import type { LifecycleSupplierApplyListDto, LifecycleSupplierListDto } from './dto'
import type { LifecycleSupplierApplyVO, LifecycleSupplierVo } from './vo'

export * from './dto'
export * from './enums'
export * from './vo'

export class LifecycleAPI extends BaseAPI {
  #API_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-srm/lifecycle`
  }

  /**
   * 生命周期供应商列表
   * @param params
   * @param signal
   * @returns
   */
  async list(params: LifecycleSupplierListDto, signal?: AbortSignal) {
    return mockList<LifecycleSupplierVo>({
      lifeStage: '生命阶段',
      organizationId: 1,
      organizationName: '组织名称/基地名称',
      relegationStatus: '3',
      strategyManager: '策略负责人',
      supplierCode: 1,
      supplierId: 1,
      supplierName: '供应商名称',
      targetStage: '目标阶段'
    })
    return this.httpRequest.post<LifecycleSupplierVo>(
      `${this.#API_PREFIX}/supplier/list-lifecycle-supplier-by-page`,
      params,
      { signal }
    )
  }

  async applicationFormList(params: LifecycleSupplierApplyListDto, signal?: AbortSignal) {
    return mockList<LifecycleSupplierApplyVO>({
      annexIds: '64',
      applyCode: '36',
      companyName: '在照受并对边',
      createTime: '1986-12-12 16:16:25',
      createDepartment: 'qui ',
      creatorName: '如中传光去六',
      currentStage: '123',
      description:
        '热起场先质年书机省消革证育求设际。识要热她容合斗出革增细合重天王。象她级难音世战手干型风离力。复正金程元史方历低说元式无十期元和。问头提称作外非白小分必断调件响。建手价空号立新也流他少须单这。示龙布学日计带一手复期六有之称各说理。',
      grade: 'in ',
      organizationId: 80,
      score: 36,
      scoreTemplate: 'Loremin',
      scoreTemplateId: 21,
      status: 'id Ut',
      supplierCode: '69',
      supplierIName: '人金一最半',
      supplierId: 84,
      targetStage: 'dolore '
    })
    return this.httpRequest.post<any>(
      `${this.#API_PREFIX}/supplier/list-lifecycle-supplier-apply-by-page`,
      params,
      { signal }
    )
  }

  async supplierInfo(params: { supplierId: string }, signal?: AbortSignal) {
    return mockEntity<LifecycleSupplierVo>({
      lifeStage: '生命阶段',
      organizationId: 1,
      organizationName: '组织名称/基地名称',
      relegationStatus: '1',
      strategyManager: '策略负责人',
      supplierCode: 1,
      supplierId: 1,
      supplierName: '供应商名称',
      targetStage: '目标阶段',
      currentStage: '当前阶段',
      enableBlackList: true,
      blackListReason: '黑名单原因',
      // blackListInvalidTime: '2021-12-12 16:16:25',
      foreverBlackList: true,
      creatorName: '创建人',
      createdTime: '2021-12-12 16:16:25',
      base: '基地'
    })
    return this.httpRequest.get<any>(`${this.#API_PREFIX}/supplier/get-lifecycle-supplier-info`, {
      params,
      signal
    })
  }

  async getApplyInfo(params: { applyCode: string }, signal?: AbortSignal) {
    return mockEntity<LifecycleSupplierApplyVO>({
      applyCode: '申请编号',
      companyName: '公司名称',
      createDepartment: '创建部门',
      createTime: '创建时间',
      creatorName: '创建人',
      currentStage: '2',
      description: '说明',
      grade: '等级',
      organizationId: 1,
      score: 1,
      scoreTemplate: '评分要素（评分模板）',
      scoreTemplateId: 1,
      status: '2',
      supplierCode: '供应商编码',
      supplierId: 1,
      supplierName: '供应商名称',
      targetStage: '3',
      base: '基地'
    })
    // return this.httpRequest.get<any>(
    //   `${this.#API_PREFIX}/supplier/get-lifecycle-supplier-apply-info`,
    //   params,
    //   {
    //     signal
    //   }
    // )
  }
}
