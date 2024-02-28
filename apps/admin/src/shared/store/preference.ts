import type { TableProps } from 'antd'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  tableSize: TableProps['size']
}

interface Actions {
  setTableSize: (size: State['tableSize']) => void
}

const initialState: State = {
  /**
   * 表格的尺寸大小
   */
  tableSize: 'middle'
}

export const usePreferenceStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      setTableSize: (size) => set({ tableSize: size })
    }),
    {
      name: 'preference_store'
    }
  )
)
