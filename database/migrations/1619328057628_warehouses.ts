import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Warehouses extends BaseSchema {
  protected tableName = 'warehouses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('wid')
      table.string('oid').notNullable()
      table.string('status').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
