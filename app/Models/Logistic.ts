import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Logistic extends BaseModel {
  @column({ isPrimary: true })
  public lid: number

  @column()
  public oid: number

  @column()
  public status: string

  @column()
  public trace: string
}

