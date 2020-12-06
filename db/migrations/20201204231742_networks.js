
exports.up = function(knex) {
  return knex.schema.createTable('networks', table => {
    table.increments('id_networks')
    table.string('name')
    table.decimal('terms_cooperation',6,2)
    table.enum('type_work',['Compensation','Discount in the invoice'])
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('networks')
};
