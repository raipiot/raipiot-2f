import { createContext } from 'react'

import type { TableLayoutProps } from '.'

export const TableLayoutPropsContext = createContext<TableLayoutProps<any, any>>({})

interface TableLayoutFullScreenContextValue {
  isFullscreen: boolean
  toggleFullscreen: () => void
}

export const TableLayoutFullScreenContext = createContext<TableLayoutFullScreenContextValue>({
  isFullscreen: false,
  toggleFullscreen: () => {}
})
