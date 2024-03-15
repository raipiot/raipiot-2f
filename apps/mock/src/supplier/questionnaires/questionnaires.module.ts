import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { QuestionnairesController } from './questionnaires.controller'
import { QuestionnairesService } from './questionnaires.service'
import { Questionnaire, QuestionnaireSchema } from './schemas'

@Module({
  imports: [MongooseModule.forFeature([{ name: Questionnaire.name, schema: QuestionnaireSchema }])],
  controllers: [QuestionnairesController],
  providers: [QuestionnairesService]
})
export class QuestionnairesModule {}
