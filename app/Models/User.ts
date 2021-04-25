
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public uid: number

  @column()
  public username: string

  @column()
  public password: number

  @column()
  public salt: string
}
