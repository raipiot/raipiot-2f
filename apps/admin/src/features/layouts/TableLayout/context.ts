import { createContext } from 'react'

// NOTE: Context 只存储了 TableLayout 根组件的 DOM ref
export const TableLayoutContext = createContext<any>(null)
