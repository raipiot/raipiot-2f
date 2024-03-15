import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { plainToClass } from 'class-transformer'
import { Model } from 'mongoose'

import { PageQuestionnaireDto, SubmitQuestionnaireDto } from './dto'
import { Questionnaire } from './schemas'
import { PageQuestionnaireVo, QuestionnaireVo } from './vo'

@Injectable()
export class QuestionnairesService {
  constructor(
    @InjectModel(Questionnaire.name) private readonly QuestionnaireModel: Model<Questionnaire>
  ) {}

  async list(pageDto: PageQuestionnaireDto) {
    const { current, size, ...query } = pageDto
    const total = await this.QuestionnaireModel.countDocuments(query)
    const records = await this.QuestionnaireModel.find(query)
      .skip((current - 1) * size)
      .limit(size)
      .exec()
    return {
      records,
      total,
      current,
      size
    }
  }

  async detail(id: string) {
    const questionnaire = await this.QuestionnaireModel.findById(id)
    if (!questionnaire) {
      return null
    }
    return questionnaire
  }

  async submit(id: string, data: SubmitQuestionnaireDto) {
    if (id) {
      await this.QuestionnaireModel.findByIdAndUpdate(id, data)
    } else {
      await new this.QuestionnaireModel(data).save()
    }
  }

  async remove(ids: string[]) {
    await this.QuestionnaireModel.deleteMany({ _id: { $in: ids } })
  }
}
