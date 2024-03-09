import type { ComponentPropsWithoutRef } from 'react'

import { usePortalInfoSusptenseQuery } from '../queries'

interface Props extends ComponentPropsWithoutRef<'div'> {}

export function BannerSwiper(props: Props) {
  const { data } = usePortalInfoSusptenseQuery()
  return (
    <div {...props}>
      <ACarousel
        autoplay
        fade
        infinite
      >
        {data.bannerList.map((item) => (
          <img
            alt="banner"
            src={item}
            key={item}
            className="h-[200px] md:h-[320px]"
          />
        ))}
      </ACarousel>
    </div>
  )
}
