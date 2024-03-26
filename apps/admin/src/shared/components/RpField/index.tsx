import { isEmpty } from 'lodash-es'
import type { ReactNode } from 'react'

import type { RpDateProps } from '../RpWithDate'
import rpWithDate from '../RpWithDate'
import type { RpLinkProps } from '../RpWithLink'
import rpWithLink from '../RpWithLink'
import type { RpSkeletonProps } from '../RpWithSkeleton'
import rpWithSkeleton from '../RpWithSkeleton'
import type { RpTagProps } from '../RpWithTag'
import rpWithTag from '../RpWithTag'
import type { RpTooltipProps } from '../RpWithTooltip'
import rpWithTooltip from '../RpWithTooltip'

export interface RpFieldProps
  extends RpTagProps,
    RpSkeletonProps,
    RpDateProps,
    RpLinkProps,
    RpTooltipProps {
  value?: any
  formatter?: (value: any) => any
  as?: keyof JSX.IntrinsicElements
  valueProps?: React.HTMLAttributes<HTMLElement>
  copyable?: boolean
  booleanValue?: boolean
  defaultValue?: ReactNode
}
const RpField = rpWithSkeleton<RpFieldProps>(
  rpWithDate(
    rpWithTooltip(
      rpWithTag(
        rpWithLink(
          ({
            value,
            as = 'span',
            formatter = (v) => v,
            valueProps = {},
            copyable = false,
            booleanValue,
            defaultValue = '-',
            ..._
          }: RpFieldProps) => {
            const { t } = useTranslation()
            const { message } = AApp.useApp()
            const isBooleanValue = typeof booleanValue === 'boolean'
            let booleanString = ''
            if (isBooleanValue) {
              booleanString = value ? t('Y') : t('N')
            }
            return (
              <>
                {createElement(
                  as,
                  {
                    ...valueProps,
                    onClick: (e: any) => {
                      valueProps?.onClick?.(e)
                      if (copyable) {
                        const text = formatter(value)
                        if (typeof text === 'string') {
                          BrowserUtils.setClipBoardText(text).then(() => {
                            message.success(t('COPY.SUCCESS'))
                          })
                        }
                      }
                    }
                  },
                  isBooleanValue
                    ? booleanString
                    : formatter(typeof value === 'string' && isEmpty(value) ? defaultValue : value)
                )}
              </>
            )
          }
        )
      )
    )
  )
)
export default RpField
