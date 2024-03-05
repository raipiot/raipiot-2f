import type { HTMLAttributes } from 'react'

import { usePortalInfoSusptenseQuery } from '../queries'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function BannerSwiper(props: Props) {
  const { data } = usePortalInfoSusptenseQuery()
  return (
    <div
      className="overflow-hidden"
      {...props}
    >
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
