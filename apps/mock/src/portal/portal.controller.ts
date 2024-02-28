import { en, Faker, zh_CN } from '@faker-js/faker'
import { Controller, Get, Req } from '@nestjs/common'

@Controller('portal')
export class PortalController {
  // constructor(private readonly portalService: PortalService) {}

  @Get('info')
  info(@Req() request: Request) {
    // how to get header from request header in nestjs
    // https://stackoverflow.com/questions/64660830/how-to-get-header-from-request-header-in-nestjs
    const lang = request.headers['accept-language'] as string

    const fakerInstance = new Faker({ locale: lang === 'zh-CN' ? zh_CN : en })

    return {
      bannerList: [
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1476673160081-cf065607f449?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1488921618671-463b781ac428?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1542785853-cf202360bca0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      // faker.languageCode(lang),
      // init faker language

      bidNoticeList: Array.from({ length: 5 }, () => fakerInstance.company.name()),
      inviteBidList: Array.from({ length: 5 }, () => fakerInstance.company.name()),
      companyNoticeList: Array.from({ length: 5 }, () => fakerInstance.company.name()),
      platformNoticeList: Array.from({ length: 5 }, () => fakerInstance.company.name())
    }
  }
}
