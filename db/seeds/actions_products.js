
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions_products').del()
    .then(function () {
      // Inserts seed entries
      // return knex('actions_products').insert([
      //   {id_actions: 1,id_products:1},
      //   {id_actions: 1,id_products:2}
      // ]);
    });
};
SELECT id_actions,lname, n.name, n.terms_cooperation FROM actions a LEFT JOIN users u ON a.id_users=u.id_users JOIN networks n ON a.id_networks=n.id_networks;