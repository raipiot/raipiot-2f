import { createLazyFileRoute } from '@tanstack/react-router'

import BannerSwiper from '@/features/portal/components/BannerSwiper'
import { Login } from '@/features/portal/components/Login'
import PublicNotify from '@/features/portal/components/PublicNotify'
import { usePortalInfoSusptenseQuery } from '@/features/portal/queries'

export const Route = createLazyFileRoute('/_portal/')({
  component: Portal
})

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-0 bg-gray-200 md:gap-[6px] lg:grid-cols-[1fr_1fr_350px]">
      {children}
    </div>
  )
}

function Portal() {
  const { t } = useTranslation(['PORTAL'])
  const { data } = usePortalInfoSusptenseQuery()

  return (
    <div className="flex flex-col gap-y-4 bg-gray-200 md:gap-[6px]">
      <Container>
        <BannerSwiper className="col-span-2 bg-white" />
        <Login className="flex h-[320px] flex-col bg-white p-3 px-8 md:px-6" />
      </Container>
      {/* 中间 */}
      <Container>
        <div className="col-span-2 grid grid-cols-1 gap-x-[6px] bg-gray-200 md:grid-cols-2">
          <PublicNotify
            title={t('BID.WINNING.NOTICE')}
            items={data.bidNoticeList}
          />
          <PublicNotify
            title={t('TENDER.AND.FIND.SOURCE')}
            items={data.inviteBidList}
          />
        </div>
        <div className="col-span-3 block h-[10px] bg-gray-200 sm:hidden" />
        <div className="col-span-1 min-h-[400px] bg-white px-8 md:px-4">
          <ATabs defaultActiveKey="1">
            <ATabs.TabPane
              tab={t('PORTAL:ENTERPRISE.NOTICE')}
              key="1"
            >
              <div className="flex flex-col">
                {data.companyNoticeList.map((text, idx) => (
                  <Link
                    className="space-y-2 !text-sm !text-gray-900/70"
                    key={idx}
                    to="/"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </ATabs.TabPane>
            <ATabs.TabPane
              tab={t('PORTAL:PLATFORM.NOTICE')}
              key="2"
            >
              <div className="flex flex-col">
                {data.platformNoticeList.map((text, idx) => (
                  <Link
                    className="space-y-2 !text-sm !text-gray-900/70"
                    key={idx}
                    to="/"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </ATabs.TabPane>
          </ATabs>
        </div>
      </Container>
      {/* 底部 */}
      <Container>
        <div className="col-span-2 min-h-[300px] bg-white p-4">
          <h3 className="mb-4 font-semibold">{t('ENTERPRISE.INTRODUCTION')}</h3>
          <p className="indent-8">{t('COMPANY.INTRODUCTION.DETAIL.A')}</p>
          <br />
          <p className="indent-8">{t('COMPANY.INTRODUCTION.DETAIL.B')}</p>
        </div>
        <div className="col-span-1 bg-white p-4">
          <h3 className="mb-4 font-semibold">{t('CONTACT.INFORMATION')}</h3>
          <ul
            className="pl-4"
            style={{
              listStyle: 'inside'
            }}
          >
            <li>{t('VX.INFO')}</li>
            <li>{t('COMPANY.OFFICIAL.WEBSITE')}</li>
            <li>{t('COMPANY.CONTACT.NUMBER')}</li>
            <li>{t('COMPANY.ADDRESS')}</li>
          </ul>
        </div>
      </Container>
      {/* 企业声明 */}
      <Container>
        <div className="col-span-3 p-6 text-center">
          <section className="mb-4">注册协议隐私政策说明</section>
          <p>
            版权所有 Copyright © 一道新能源科技（衢州）有限公司 All Rights Reserved.
            浙ICP备19001487号-1
          </p>
        </div>
      </Container>
    </div>
  )
}
