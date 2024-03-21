import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export type PermCode =
  | 'srm:resource-pool-scopes' // 资源池范围配置
  | 'srm:resource-pool-scopes:create' // 资源池范围配置创建
  | 'srm:resource-pool-scopes:edit' // 资源池范围配置编辑
  | 'srm:resource-pool-scopes:remove' // 资源池范围配置删除
  | 'srm:questionnaires' // 调查表管理
  | 'srm:questionnaires:create' // 调查表创建
  | 'srm:questionnaires:write' // 调查表填写
  | 'srm:questionnaires:review' // 调查表审核

interface State {
  codes: Set<string>
}

interface Actions {
  /**
   * 获取权限列表
   */
  getList: () => string[]
  /**
   * 添加权限
   * @param code 权限代码
   */
  addCode: (code: string) => void
  /**
   * 移除权限
   */
  removeCode: (code: string) => void
  /**
   * 设置权限
   * @param codes 权限代码集合
   */
  setCodes: (codes: Set<string>) => void
  /**
   * 是否满足权限
   * @param codes 权限代码列表
   * @example
   * ```ts
   * authStore.hasCode('user:add')
   * authStore.hasCode('user:add', 'user:delete') // 有一个即可
   * ```
   */
  hasCode: (...codes: string[]) => boolean
  /**
   * 是否满足所有权限
   * @param codes 权限代码列表
   * @example
   * ```ts
   * authStore.hasAllCode('user:add', 'user:delete') // 必须全部满足
   * ```
   */
  hasAllCode: (...codes: string[]) => boolean
}

const initialState: State = {
  codes: new Set([])
}

export const usePermStore = create<State & Actions>()(
  devtools(
    persist(
      immer((set, get) => ({
        ...initialState,
        getList: () => Array.from(get().codes),
        addCode: (code) =>
          set((state) => {
            state.codes.add(code)
          }),
        removeCode: (code) =>
          set((state) => {
            state.codes.delete(code)
          }),
        setCodes: (codes) => set({ codes }),
        hasCode: (...codes) => codes.some((code) => get().codes.has(code)),
        hasAllCode: (...codes) => codes.every((code) => get().codes.has(code))
      })),
      {
        name: 'perm_store',
        storage: {
          getItem: (name) => {
            const str = localStorage.getItem(name)
            return {
              state: {
                ...JSON.parse(str ?? '').state,
                codes: new Set(JSON.parse(str ?? '').state.codes)
              }
            }
          },
          setItem: (name, newValue) => {
            const str = JSON.stringify({
              state: {
                ...newValue.state,
                codes: newValue.state.getList()
              }
            })
            localStorage.setItem(name, str)
          },
          removeItem: (name) => localStorage.removeItem(name)
        }
      }
    )
  )
)
