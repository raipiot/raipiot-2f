import type { RpCardProps } from '../RpCard'

export interface RpWithCardProps {
  /**
   * 卡片属性
   */
  cardProps?: RpCardProps
  /**
   * 是否隐藏卡片
   * @default false
   */
  hideCard?: boolean
}

const rpWithCard = <T extends object = any>(
  WrappedComponent: React.ComponentType<Omit<T, 'cardProps' | 'hideCard'>>
) =>
  function RpWithCard(props: T) {
    const { hideCard, cardProps, ...restProps } = props as T & RpWithCardProps
    if (!hideCard) {
      return (
        <RpCard {...cardProps}>
          <WrappedComponent {...restProps} />
        </RpCard>
      )
    }
    return <WrappedComponent {...restProps} />
  }
export default rpWithCard
