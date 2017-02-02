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

		return queryInterface.bulkInsert('user', [{
			email: 'sri@sri.com',
			password: 'password',
			name: 'Sri Majji',
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
