exports.seed = function(knex) {
	return knex('users').del().then(function() {
		return knex('users').insert([
			{
				fname: 'Наталья',
				lname: 'Богоявленская',
				email: 'n.bogoyavlenskaya@artwinery.com.ua',
				phone: '+380664935171'
			},
			{
				fname: 'Татьяна',
				lname: 'Савенко',
				email: 't.savenko@artwinery.com.ua',
				phone: '+380501475057'
			},
			{
				fname: 'Виталий',
				lname: 'Гаргай',
				email: 'v.gargay@artwinery.com.ua',
				phone: '+380935177972'
			}
		])
	})
}
