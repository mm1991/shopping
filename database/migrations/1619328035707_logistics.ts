import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Logistics extends BaseSchema {
  protected tableName = 'logistics'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('lid')
      table.string('oid').notNullable()
      table.string('status').notNullable()
      table.string('trace').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
