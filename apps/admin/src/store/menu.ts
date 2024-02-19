import { create } from 'zustand'

import { ModuleMenuCode } from '@/features/menus'

interface State {
  activeModuleMenuCode: ModuleMenuCode
}

interface Actions {
  setActiveModuleMenuCode: (activeModuleMenuCode: ModuleMenuCode) => void
}

const initialState: State = {
  activeModuleMenuCode: ModuleMenuCode.DASHBOARD
}

export const useMenuStore = create<State & Actions>()((set) => ({
  ...initialState,

  /**
   * 设置当前的模块菜单
   */
  setActiveModuleMenuCode: (activeModuleMenuCode: ModuleMenuCode) => set({ activeModuleMenuCode })
}))
