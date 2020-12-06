
exports.up = function(knex) {
  return knex.schema.createTable('actions', table => {
    table.increments('id_actions')
    table.integer("id_users")
    .notNullable()
    .references('id_users')
    .inTable('users')
    .onDelete('cascade');
    table.integer("id_networks")
    .notNullable()
    .references('id_networks')
    .inTable('networks')
    .onDelete('cascade');
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('actions')
};

