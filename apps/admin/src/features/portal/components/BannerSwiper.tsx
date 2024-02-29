import { usePortalInfoSusptenseQuery } from '../queries'

type Props = {
  className?: string
}

export default function BannerSwiper({ className = '' }: Props) {
  const { data } = usePortalInfoSusptenseQuery()
  return (
    <div className={clsx(className, 'overflow-hidden')}>
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
