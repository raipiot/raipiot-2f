import type { BaseModalContextProps, PlatformModalContextProps } from './types'

export const BaseModalContext = createContext<BaseModalContextProps | undefined>(undefined)

export const PlatformModalContext = createContext<PlatformModalContextProps | undefined>(undefined)

export const useBaseModalContext = () => {
  const context = useContext(BaseModalContext)
  if (context === undefined) {
    throw new Error('useBaseModalContext must be used within a BaseModalProvider')
  }
  return context
}

export const usePlatformModalContext = () => {
  const context = useContext(PlatformModalContext)
  if (context === undefined) {
    throw new Error('usePlatformModalContext must be used within a PlatformModalProvider')
  }
  return context
}
