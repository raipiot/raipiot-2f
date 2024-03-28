import { ScopesAPI } from '@raipiot-2f/api'
import HttpRequest from '@raipiot-2f/axios'

// API 实例对象注册端点
export const httpRequest = new HttpRequest()

// 供应商
export const suppliersAPI = new SuppliersAPI(httpRequest)
export const invitationsAPI = new InvitationsAPI(httpRequest)
export const resourcePoolPlansAPI = new ResourcePoolPlansAPI(httpRequest)
export const resourcePoolScopesAPI = new ResourcePoolScopesAPI(httpRequest)
export const questionnairesAPI = new QuestionnairesAPI(httpRequest)
export const categoriesAPI = new CategoriesAPI(httpRequest)

// 系统
export const authAPI = new AuthAPI(httpRequest)
export const usersAPI = new UsersAPI(httpRequest)
export const postsAPI = new PostsAPI(httpRequest)
export const systemDictsAPI = new SystemDictsAPI(httpRequest)
export const bizDictsAPI = new BizDictsAPI(httpRequest)
export const menusAPI = new MenusAPI(httpRequest)
export const paramsAPI = new ParamsAPI(httpRequest)
export const tenantsAPI = new TenantsAPI(httpRequest)
export const deptsAPI = new DeptsAPI(httpRequest)
export const rolesAPI = new RolesAPI(httpRequest)
export const scopesAPI = new ScopesAPI(httpRequest)

export const dashboardAPI = new DashboardAPI(httpRequest)
