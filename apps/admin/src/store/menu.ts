import { create } from 'zustand'

interface State {}

interface Actions {}

const initialState: State = {
  activeMenuKey: ''
}

export const useMenuStore = create<State & Actions>()(() => ({
  ...initialState
}))
