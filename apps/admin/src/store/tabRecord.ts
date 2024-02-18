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

export const useTabRecordStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,

      /**
       * 添加一个路由地址到记录中
       * @param record 路由地址
       */
      addRecord: (record: Record) => {
        set((state) => ({
          records: uniqBy([...state.records, record], 'path')
        }))
      },
      /**
       * 移除一个路由地址
       * @param record 路由地址
       */
      removeRecordByPath: (_path: string) => {
        set((state) => ({
          records: state.records.filter(({ path }) => path !== _path || path === '/')
        }))
      },

      /**
       * 清空所有记录
       */
      clearRecords: () => {
        set(() => ({ records: [...initialState.records] }))
      }
    }),
    {
      name: 'route-record-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage) // (optional) by default, 'localStorage' is used
    }
  )
)
