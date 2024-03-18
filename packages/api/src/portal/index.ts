import type HttpRequest from '@raipiot-2f/axios'

import { BaseAPI } from '../base'

export * from './dto'

export class PortalAPI extends BaseAPI {
  #API_PREFIX: string

  #API_MOCK_PREFIX: string

  constructor(httpRequest: HttpRequest) {
    super(httpRequest)
    this.#API_PREFIX = `${this.BASE_API_PREFIX}/raipiot-system/portal`
    this.#API_MOCK_PREFIX = `${this.MOCK_API_PREFIX}/portal`
  }

  async info({ signal }: { signal?: AbortSignal }) {
    // return this.httpRequest.get<PortalInfo>(
    //   `${this.#API_MOCK_PREFIX}/info`,
    //   {},
    //   {
    //     signal
    //   }
    // )
    return {
      bannerList: [],
      bidNoticeList: [],
      inviteBidList: [],
      companyNoticeList: [],
      platformNoticeList: []
    }
  }
}
