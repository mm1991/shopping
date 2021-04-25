import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Goods extends BaseSchema {
  protected tableName = 'goods'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('gid')
      table.string('name').collate('utf8_unicode_ci');
      table.integer('amount').notNullable()
      table.float('price').notNullable()
      table.string('intro').collate('utf8_unicode_ci');
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
