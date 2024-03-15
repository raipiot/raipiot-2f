import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../../base'
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

  /**
   * 列表
   */
  list(params: QuestionnairePageDto, signal?: AbortSignal) {
    return this.httpRequest.post<QuestionnairesVo>(`${this.#API_MOCK_PREFIX}/list`, params, {
      signal
    })
  }

  /**
   * 详情
   */
  async detail(id: string, signal?: AbortSignal) {
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
    return this.httpRequest.post(`${this.#API_MOCK_PREFIX}/submit`, data)
  }

  /**
   * 删除
   */
  async remove(ids: string) {
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
