import { Exclude, Expose } from 'class-transformer'

@Exclude()
export class MongoBaseResource {
  @Expose()
  id: string

  @Expose()
  createdAt: Date

  @Expose()
  updatedAt: Date

  @Expose()
  sort?: number
}
