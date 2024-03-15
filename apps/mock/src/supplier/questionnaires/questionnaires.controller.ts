import { Body, Controller, Post } from '@nestjs/common'

import { R } from '@/class'

import { PageQuestionnaireDto, SubmitQuestionnaireDto } from './dto'
import { QuestionnairesService } from './questionnaires.service'

@Controller('questionnaires')
export class QuestionnairesController {
  constructor(private readonly questionnairesService: QuestionnairesService) {}

  @Post('list')
  async list(@Body() pageDto: PageQuestionnaireDto) {
    return new R({
      data: await this.questionnairesService.list(pageDto)
    })
  }

  @Post('detail')
  async detail(@Body('id') id: string) {
    return new R({
      data: await this.questionnairesService.detail(id)
    })
  }

  @Post('submit')
  async submit(@Body('id') id: string, @Body() submitDto: SubmitQuestionnaireDto) {
    await this.questionnairesService.submit(id, submitDto)
    return new R({})
  }

  @Post('remove')
  async remove(@Body('ids') ids: string[]) {
    await this.questionnairesService.remove(ids)
    return new R({})
  }
}
