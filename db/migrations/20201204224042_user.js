
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id_users')
    table.string('fname')
    table.string('lname')
    table.string('email')
    table.string('phone')
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
