import { uniqBy } from 'lodash-es'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Record = {
  path: string
  active: boolean
}

interface State {
  records: Record[]
}

interface Actions {
  /**
   * 添加一个路由地址到记录中
   * @param path 路由地址
   */
  addRecordByPath: (path: string) => void
  /**
   * 移除一个路由地址
   * @param path 路由地址
   */
  removeRecordByPath: (path: string) => void
  /**
   * 更新记录
   * @param records 记录
   */
  setRecords: (records: Record[]) => void
  /**
   * 清空所有记录
   */
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

export const useTabStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        addRecordByPath: (path: string) =>
          set((state) => ({
            records: uniqBy([...state.records, { path, active: true }], 'path')
          })),
        removeRecordByPath: (path: string) =>
          set((state) => ({
            records: state.records.filter((record) => path !== record.path || record.path === '/')
          })),
        setRecords: (records: Record[]) => {
          set(() => ({ records }))
        },
        clearRecords: () => {
          set(() => ({ records: [...initialState.records] }))
        }
      }),
      {
        name: 'tab_store'
      }
    )
  )
)
