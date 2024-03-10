import type { CardProps } from 'antd'

export interface RpWithCardProps {
  /**
   * 卡片属性
   */
  cardProps?: CardProps
  /**
   * 是否隐藏卡片
   * @default false
   */
  hideCard?: boolean
}

const rpWithCard = <T extends object = any>(
  WrappedComponent: React.ComponentType<Omit<T, 'cardProps' | 'hideCard'>>
) =>
  function RpWithCard(props: T & RpWithCardProps) {
    const { hideCard, cardProps, ...restProps } = props
    if (!hideCard) {
      return (
        <ACard {...cardProps}>
          <WrappedComponent {...restProps} />
        </ACard>
      )
    }
    return <WrappedComponent {...restProps} />
  }
export default rpWithCard
