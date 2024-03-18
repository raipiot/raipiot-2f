import type { BaseModalContextProps, PermissionsModalContextProps } from './types'

export const BaseModalContext = createContext<BaseModalContextProps | undefined>(undefined)

export const useBaseModalContext = () => {
  const context = useContext(BaseModalContext)
  if (context === undefined) {
    throw new Error('useBaseModalContext must be used within a BaseModalProvider')
  }
  return context
}

export const PermissionsModalContext = createContext<PermissionsModalContextProps | undefined>(
  undefined
)

export const usePermissionsModalContext = () => {
  const context = useContext(PermissionsModalContext)
  if (context === undefined) {
    throw new Error('usePermissionsModalContext must be used within a PermissionsModalProvider')
  }
  return context
}
