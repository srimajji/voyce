'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		/*
			Add altering commands here.
			Return a promise to correctly handle asynchronicity.

			Example:
			return queryInterface.bulkInsert('Person', [{
				name: 'John Doe',
				isBetaMember: false
			}], {});
		*/

		return queryInterface.bulkInsert('company', [{
			alias: 'bestbuy',
			name: 'bestbuy',
			location: 'Geary St, San Francisco',
			website: 'http://bestbuy.com',
			categories: "{ 'food','goog'}",
			location: 'Bryant St, San Franciso, CA',
			created_at: new Date(),
			updated_at: new Date()
		}], {});

	},

	down: function (queryInterface, Sequelize) {
		/*
			Add reverting commands here.
			Return a promise to correctly handle asynchronicity.

			Example:
			return queryInterface.bulkDelete('Person', null, {});
		*/
	}
};
