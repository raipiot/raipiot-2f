import type { Nullable } from '@raipiot-infra/utils'
import { create } from 'zustand'

import type { UserInfo } from '@/features/users'

interface State {
  user: Nullable<UserInfo>
}

interface Actions {
  setUser: (user: UserInfo) => void
  clearUser: () => void
}

const initialState: State = {
  /**
   * 当前登录系统的用户数据
   */
  user: null
}

export const useUserStore = create<State & Actions>()((set) => ({
  ...initialState,

  /**
   * 设置当前用户数据，更新方式为“非覆盖式更新”
   * @param data 用户数据
   */
  setUser: (user: Partial<UserInfo>) =>
    set((state) => ({
      user: {
        ...state.user,
        ...user
      }
    })),

  /**
   * 清空当前用户数据
   */
  clearUser: () => set(() => ({ user: null }))
}))
