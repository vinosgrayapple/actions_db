exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('networks').del().then(function() {
		// Inserts seed entries
		return knex('networks').insert([
			{
				name: 'ТОВ "АТБ-Маркет"',
				terms_cooperation: 0.1401,
				type_work: 'Discount in the invoice'
      },
      {
				name: 'ПІІ "Білла-Україна"',
				terms_cooperation: 0.1820,
				type_work: 'Discount in the invoice'
			}
		])
	})
}
