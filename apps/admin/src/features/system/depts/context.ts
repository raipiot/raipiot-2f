import type { Dispatch, SetStateAction } from 'react'

import type { BaseModalContextProps } from './types'

export const BaseContext = createContext<{
  disabledParentId?: boolean
  setDisabledParentId?: Dispatch<SetStateAction<boolean>>
}>({})

export const useBaseContext = () => useContext(BaseContext)

export const BaseModalContext = createContext<BaseModalContextProps | undefined>(undefined)

export const useBaseModalContext = () => {
  const context = useContext(BaseModalContext)
  if (context === undefined) {
    throw new Error('useBaseModalContext must be used within a BaseModalProvider')
  }
  return context
}
