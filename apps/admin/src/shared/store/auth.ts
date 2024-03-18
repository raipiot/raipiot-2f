import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

import { Role } from '../enums'

interface State {
  role: Role
  isPurchaser: boolean
  isSupplier: boolean
}

interface Actions {
  setRole: (role: Role) => void
}

const initialState: State = {
  role: Role.PURCHASER,
  isPurchaser: true,
  isSupplier: false
}

export const useAuthStore = create<State & Actions>()(
  subscribeWithSelector((set) => ({
    ...initialState,
    /**
     * 设置角色
     * @param role 选择的角色
     */
    setRole: (role: Role) => set({ role })
  }))
)

useAuthStore.subscribe(
  (state) => state.role,
  (role) => {
    useAuthStore.setState({
      isPurchaser: role === Role.PURCHASER,
      isSupplier: role === Role.SUPPLIER
    })
  }
)
