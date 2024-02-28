import type { TableProps } from 'antd'
import { merge } from 'lodash-es'
import type { CSSProperties } from 'react'

import styles from './index.module.scss'
import TableTitle from './TableTitle'

interface Props<T> extends TableProps<T> {}

export default function Table<T extends object = any>(props: Props<T>) {
  const { ...restProps } = props

  const preferenceStore = usePreferenceStore()
  const size = useSize(window.document.body)
  const containerRef = useRef(null)

  return (
    <ACard>
      <div
        className={styles.customTable}
        style={
          {
            '--dynamic-max-height': size?.height ? `${size.height - 480}px` : undefined,
            // min-height 兼容移动端
            '--dynamic-min-height': size?.height ? `${size.height - 370}px` : undefined
          } as CSSProperties
        }
      >
        <ATable<T>
          ref={containerRef}
          // NOTE: 这里第一个参数是空对象，是为了防止改变原对象
          {...merge(
            {},
            {
              scroll: {
                scrollToFirstRowOnChange: true,
                x: 800,
                y: size?.height ? size.height - 480 : 300
              },
              pagination: false,
              title: () => <TableTitle />,
              size: preferenceStore.tableSize
            },
            restProps
          )}
        />
      </div>
    </ACard>
  )
}
