import { AuthAPI, SystemDictsAPI, SystemParamsAPI, UsersAPI } from '@raipiot-2f/api'
import HttpRequest from '@raipiot-2f/axios'

// API 实例对象注册端点

export const httpRequest = new HttpRequest()

export const authAPI = new AuthAPI(httpRequest)
export const usersAPI = new UsersAPI(httpRequest)
export const systemDictsAPI = new SystemDictsAPI(httpRequest)
export const systemParamsAPI = new SystemParamsAPI(httpRequest)