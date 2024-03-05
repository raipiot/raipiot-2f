import { createLazyFileRoute } from '@tanstack/react-router'
import type { TabsProps } from 'antd/lib'
import type { PropsWithChildren } from 'react'

import {
  BannerSwiper,
  PortalHeader,
  PublicNotify,
  usePortalInfoSusptenseQuery
} from '@/features/portal'

export const Route = createLazyFileRoute('/_portal/')({
  component: Portal
})

function Container({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-2 gap-0 rounded-md shadow-sm shadow-gray-200 dark:shadow-gray-700 sm:grid-cols-[1fr_1fr_250px] md:grid-cols-[1fr_1fr_350px] md:gap-[6px]">
      {children}
    </div>
  )
}

function Portal() {
  const { t } = useTranslation(['PORTAL'])
  const { data } = usePortalInfoSusptenseQuery()

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: t('ENTERPRISE.NOTICE'),
      children: (
        <ul>
          {data.companyNoticeList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )
    },
    {
      key: '2',
      label: t('PLATFORM.NOTICE'),
      children: (
        <ul>
          {data.platformNoticeList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )
    }
  ]

  return (
    <div className="box-border min-h-[100vh] overflow-x-hidden bg-[#f8f8fa] dark:bg-gray-800">
      <PortalHeader />
      <div className="mx-auto flex w-[1200px] max-w-[100vw] flex-col gap-y-[1px] bg-gray-50  dark:bg-gray-800 md:mt-4 md:gap-[8px] md:gap-y-4">
        <Container>
          <BannerSwiper className="col-span-3 bg-white md:col-span-2" />
          <div className="col-span-3 bg-white p-4 dark:bg-gray-900 md:col-span-1">
            <AFlex
              align="center"
              className="mb-4 gap-2 font-semibold"
            >
              <MaterialSymbolsFiberNewSharp className="text-blue-600" />
              快讯
            </AFlex>
            <ul
              className="grid grid-cols-2 pl-4 md:block md:h-[250px]"
              style={{
                listStyle: 'inside'
              }}
            >
              {data.platformNoticeList.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </Container>
        {/* 中间 */}
        <Container>
          <div className="col-span-2 grid grid-cols-1 gap-x-[6px] lg:grid-cols-2">
            <PublicNotify
              title={t('BID.WINNING.NOTICE')}
              items={data.bidNoticeList}
            />
            <PublicNotify
              title={t('TENDER.AND.FIND.SOURCE')}
              items={data.inviteBidList}
            />
          </div>
          <div className="col-span-3 block h-[10px] sm:hidden" />
          <div className="col-span-3 min-h-[400px] bg-white px-8 dark:bg-gray-900 md:col-span-1 md:px-4">
            <ATabs
              defaultActiveKey="1"
              items={items}
            />
          </div>
        </Container>
        {/* 底部 */}
        <Container>
          <div className="col-span-2 min-h-[300px] bg-white p-4 dark:bg-gray-900">
            <AFlex
              align="center"
              className="mb-4 gap-2 font-semibold"
            >
              <MaterialSymbolsHomeWorkOutlineRounded className="text-blue-600" />{' '}
              {t('ENTERPRISE.INTRODUCTION')}
            </AFlex>
            <p className="indent-8">{t('COMPANY.INTRODUCTION.DETAIL.A')}</p>
            <br />
            <p className="indent-8">{t('COMPANY.INTRODUCTION.DETAIL.B')}</p>
          </div>
          <div className="col-span-3 bg-white p-4 dark:bg-gray-900 md:col-span-1">
            <AFlex
              align="center"
              className="mb-4 gap-2 font-semibold"
            >
              <MaterialSymbolsContactPhoneOutlineSharp className="text-blue-600" />{' '}
              {t('CONTACT.INFORMATION')}
            </AFlex>
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
        <div className="col-span-3 p-6 text-center">
          <section className="mb-4">注册协议隐私政策说明</section>
          <p>版权所有 Copyright © xxxxxxx有限公司 All Rights Reserved. 浙ICP备19001487号-1</p>
        </div>
      </div>
    </div>
  )
}
