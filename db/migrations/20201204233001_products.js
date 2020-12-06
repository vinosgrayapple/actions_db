
exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
    table.increments('id_products')
    table.string('name')
    table.string('lcode')
    table.string('tm')
    table.decimal('liter',6,2)
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products')
};

