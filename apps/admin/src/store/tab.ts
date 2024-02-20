import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type Record = {
  path: string
  active: boolean
}

interface State {
  records: Record[]
}

interface Actions {
  addRecordByPath: (path: string) => void
  removeRecordByPath: (path: string) => void
  clearRecords: () => void
}

const initialState: State = {
  /**
   * 系统内历史记录的标签页
   */
  records: [
    {
      path: '/',
      active: true
    }
  ]
}

const tabBlackList = ['/signup', '/login', '/forgot-password', '/reset-password']

export const useTabStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,

      /**
       * 添加一个路由地址到记录中
       * @param record 路由记录
       */
      addRecordByPath: (path: string) => {
        set((state) => {
          const isBlackListItem = tabBlackList.some((p) => p === path)
          if (isBlackListItem) {
            return state
          }
          return {
            records: state.records.some((i) => i.path === path)
              ? state.records.map((i) => ({ ...i, active: i.path === path }))
              : [...state.records, { path, active: true }]
          }
        })
      },
      /**
       * 移除一个路由地址
       * @param path 路由地址
       */
      removeRecordByPath: (path: string) =>
        set((state) => ({
          records: state.records.filter((r) => r.path !== path || r.path === '/')
        })),
      /**
       * 清空所有记录
       */
      clearRecords: () => set(() => ({ records: [...initialState.records] }))
    }),
    {
      name: 'tab_store',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
