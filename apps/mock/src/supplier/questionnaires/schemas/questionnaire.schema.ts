import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import type { HydratedDocument } from 'mongoose'

export type QuestionnaireDocument = HydratedDocument<Questionnaire>

@Schema({
  id: true,
  timestamps: true,
  autoIndex: true,
  collection: 'supplier_questionnaires',
  toJSON: {
    transform(doc, ret) {
      // eslint-disable-next-line no-underscore-dangle
      ret.id = ret._id
      // eslint-disable-next-line no-underscore-dangle
      delete ret._id
      // eslint-disable-next-line no-underscore-dangle
      delete ret.__v
    }
  }
})
export class Questionnaire {
  @Prop()
  application?: string

  @Prop()
  company?: string

  @Prop()
  controlDimension?: string

  @Prop()
  createDepartment?: string

  @Prop()
  createUser?: number

  @Prop()
  questionnaireTemplateId?: string

  @Prop()
  questionnaireType?: string

  @Prop()
  supplierIds?: string[]
}

export const QuestionnaireSchema = SchemaFactory.createForClass(Questionnaire)
