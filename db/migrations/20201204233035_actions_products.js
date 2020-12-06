exports.up = function(knex) {
  return knex.schema.createTable('actions_products', table => {
    table.increments('id_actions_products')
    table.integer("id_actions")
    .notNullable()
        .references('id_actions')
        .inTable('actions')
        .onDelete('cascade');
    table.integer("id_products")
    .notNullable()
        .references('id_products')
        .inTable('products')
        .onDelete('cascade');
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('actions_products')
};