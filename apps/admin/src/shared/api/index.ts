import {
  AuthAPI,
  DashboardAPI,
  ParamsAPI,
  PortalAPI,
  PostAPI,
  SystemDictsAPI,
  UsersAPI
} from '@raipiot-2f/api'
import HttpRequest from '@raipiot-2f/axios'

// API 实例对象注册端点
export const httpRequest = new HttpRequest()

export const authAPI = new AuthAPI(httpRequest)
export const usersAPI = new UsersAPI(httpRequest)
export const systemDictsAPI = new SystemDictsAPI(httpRequest)
export const menusAPI = new MenusAPI(httpRequest)
export const paramsAPI = new ParamsAPI(httpRequest)
export const portalAPI = new PortalAPI(httpRequest)
export const dashboardAPI = new DashboardAPI(httpRequest)
export const systemPostsAPI = new PostAPI(httpRequest)
