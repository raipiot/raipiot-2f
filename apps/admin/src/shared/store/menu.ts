import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { getModuleMenuCodeByPath, type ModuleMenuCode } from '@/features/menus'

interface State {
  activeModuleMenuCode?: ModuleMenuCode
}

interface Actions {
  /**
   * 设置当前的模块菜单
   */
  setActiveModuleMenuCode: (activeModuleMenuCode?: ModuleMenuCode) => void
}

const initialState: State = {
  activeModuleMenuCode: getModuleMenuCodeByPath(router.state.location.pathname)
}

export const useMenuStore = create<State & Actions>()(
  devtools((set) => ({
    ...initialState,
    setActiveModuleMenuCode: (activeModuleMenuCode?: ModuleMenuCode) =>
      set({ activeModuleMenuCode })
  }))
)
