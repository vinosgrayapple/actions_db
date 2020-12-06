exports.seed = function(knex) {
	return knex('products').del().then(function() {
		return knex('products').insert([
			{
				name: '"Артемівське" мускат. вит. п/сух',
				lcode: 'L1027',
				tm: '"АРТЕМІВСЬКЕ"',
				liter: 0.75
			},
			{
				name: '"Артемівське" біле витр. напівсолодке (чорн.етик) (вертик.короб)',
				lcode: 'L1104',
				tm: '"АРТЕМІВСЬКЕ"',
				liter: 0.75
			},
			{
				name: '"Артемівське" біле витр. напівсолодке (біл.етик) (вертик.короб)',
				lcode: 'L1103',
				tm: '"АРТЕМІВСЬКЕ"',
				liter: 0.75
			}
		])
	})
}
