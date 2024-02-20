import { uniqBy } from 'lodash-es'
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
  addRecord: (record: Record) => void
  removeRecordByPath: (key: string) => void
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

const tabWhitelist = ['/signup', '/login', '/forgot-password', '/reset-password']

export const useTabStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,

      /**
       * 添加一个路由地址到记录中
       * @param record 路由记录
       */
      addRecord: (record: Record) =>
        set((state) => {
          const isWhitelisted = tabWhitelist.some((path) => record.path === path)
          return {
            records: isWhitelisted
              ? uniqBy([...state.records.map((i) => ({ ...i, active: false })), record], 'path')
              : state.records
          }
        }),
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
