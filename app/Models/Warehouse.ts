import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Warehouse extends BaseModel {
  @column({ isPrimary: true })
  public wid: number

  @column()
  public oid: number

  @column()
  public status: string
}
