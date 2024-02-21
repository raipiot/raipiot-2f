export class DictPageDto extends PageDto {
  code?: string

  dictValue?: string

  constructor(dictPageDto: DictPageDto) {
    const { code, dictValue, ...pageDto } = dictPageDto
    super(pageDto)
    this.code = code
    this.dictValue = dictValue
  }
}

export interface DictSubmitDto {
  /**
   * 字典码
   */
  code?: string
  /**
   * 字典值
   */
  dictKey?: string
  /**
   * 字典名称
   */
  dictValue?: string
  /**
   * 主键
   */
  id?: string
  /**
   * 是否已删除
   */
  isDeleted?: number
  /**
   * 是否已封存
   */
  isSealed?: number
  /**
   * 父主键
   */
  parentId?: string
  /**
   * 字典备注
   */
  remark?: string
  /**
   * 排序
   */
  sort?: number
}
