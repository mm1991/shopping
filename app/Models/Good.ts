
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Good extends BaseModel {
  @column({ isPrimary: true })
  public gid: number

  @column()
  public name: string

  @column()
  public amount: number

  @column()
  public price: number

  @column()
  public intro: string
}
