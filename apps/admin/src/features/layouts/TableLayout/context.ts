import { createContext } from 'react'

import type { TableLayoutProps } from '.'

export const TableLayoutRefContext = createContext<any>(null)

export const TableLayoutPropsContext = createContext<TableLayoutProps<any>>({})
