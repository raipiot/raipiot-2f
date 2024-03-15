import { IsPositive } from 'class-validator'

export class PageDto {
  @IsPositive({ message: '页码必须大于 0' })
  current: number = 1

  @IsPositive({ message: '每页条数必须大于 0' })
  size: number = 20
}
