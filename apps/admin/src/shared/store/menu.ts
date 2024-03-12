import { create } from 'zustand'

import { getModuleMenuCodeByPath, type ModuleMenuCode } from '@/features/menus'

interface State {
  activeModuleMenuCode?: ModuleMenuCode
}

interface Actions {
  setActiveModuleMenuCode: (activeModuleMenuCode?: ModuleMenuCode) => void
}

const initialState: State = {
  activeModuleMenuCode: getModuleMenuCodeByPath(router.state.location.pathname)
}

export const useMenuStore = create<State & Actions>()((set) => ({
  ...initialState,

  /**
   * 设置当前的模块菜单
   */
  setActiveModuleMenuCode: (activeModuleMenuCode?: ModuleMenuCode) => set({ activeModuleMenuCode })
}))
