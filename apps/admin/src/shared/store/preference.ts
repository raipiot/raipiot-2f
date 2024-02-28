import type { TableProps } from 'antd'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface State {
  tableSize: TableProps['size']
}

interface Actions {
  setTableSize: (size: State['tableSize']) => void
}

const initialState: State = {
  tableSize: 'middle'
}

export const usePreferenceStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      setTableSize: (size) => set({ tableSize: size })
    }),
    {
      name: 'preference_store',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
