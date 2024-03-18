import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
import { mockEntity, mockList, timeoutResolve } from '../../mock'
import type { QuestionnairePageDto, QuestionnaireSubmitDto } from './dto'
import type { QuestionnairesVo, QuestionnaireVo } from './vo'

export * from './dto'
export * from './vo'

export class QuestionnairesAPI extends BaseAPI {
  #API_PREFIX: string

  #API_MOCK_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/questionnaires`
    this.#API_MOCK_PREFIX = `${this.MOCK_API_PREFIX}/questionnaires`
  }

  #list: QuestionnairesVo = mockList(
    {
      questionnaireId: '1',
      state: '1',
      supplierCode: 'CI00015131',
      supplierName: '常州三源光伏材料有限公司常州三源光伏材料有限公司	',
      companyCode: 'CO00014938',
      companyName: '一道新能源科技股份有限公司',
      type: '1',
      controlDimension: '集团级',
      templateName: '供应商调查表',
      createBy: 'admin',
      createDepartment: '测试（采购）',
      approvalDate: '2021-08-25 00:00:00',
      releaseDate: '2021-08-25 00:00:00',
      createTime: '2021-08-25 00:00:00',
      isInvitation: true
    },
    {
      questionnaireId: '2',
      state: '2',
      supplierCode: 'CI00015131',
      supplierName: '常州三源光伏材料有限公司',
      companyCode: 'CO00014938',
      companyName: '一道新能源科技股份有限公司',
      type: '1',
      controlDimension: '集团级',
      templateName: '供应商调查表',
      createBy: 'admin',
      createDepartment: '测试（采购）',
      approvalDate: '2021-08-25 00:00:00',
      releaseDate: '2021-08-25 00:00:00',
      createTime: '2021-08-25 00:00:00',
      isInvitation: false
    }
  )

  #detail: QuestionnaireVo = mockEntity({
    questionnaireId: '1',
    state: '1',
    supplierCode: 'CI00015131',
    supplierName: '常州三源光伏材料有限公司常州三源光伏材料有限公司	',
    companyCode: 'CO00014938',
    companyName: '一道新能源科技股份有限公司',
    type: '1',
    controlDimension: '集团级',
    templateName: '供应商调查表',
    createBy: 'admin',
    createDepartment: '测试（采购）',
    approvalDate: '2021-08-25 00:00:00',
    releaseDate: '2021-08-25 00:00:00',
    createTime: '2021-08-25 00:00:00',
    isInvitation: true
  })

  /**
   * 列表
   */
  async list(params: QuestionnairePageDto, signal?: AbortSignal): Promise<QuestionnairesVo> {
    console.log('list', params)
    return this.#list
    const data = await this.httpRequest.post<QuestionnairesVo>(
      `${this.#API_MOCK_PREFIX}/list`,
      params,
      {
        signal
      }
    )
    return data
  }

  /**
   * 详情
   */
  async detail(id: string, signal?: AbortSignal) {
    console.log('detail', id)
    return this.#detail
    return this.httpRequest.post<QuestionnaireVo>(
      `${this.#API_MOCK_PREFIX}/detail`,
      { id },
      { signal }
    )
  }

  /**
   * 提交
   */
  async submit(data: QuestionnaireSubmitDto) {
    console.log('submit', data)
    return timeoutResolve()
    return this.httpRequest.post(`${this.#API_MOCK_PREFIX}/submit`, data)
  }

  /**
   * 删除
   */
  async remove(ids: string) {
    console.log('remove', ids)
    return timeoutResolve()
    return this.httpRequest.post(
      `${this.#API_MOCK_PREFIX}/remove`,
      {},
      {
        params: {
          ids
        }
      }
    )
  }
}
