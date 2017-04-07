/* eslint-disable */

'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) { // eslint-disable-line
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

	down: function (queryInterface, Sequelize) { // eslint-disable-line
		/*
		  Add reverting commands here.
		  Return a promise to correctly handle asynchronicity.
	
		  Example:
		  return queryInterface.bulkDelete('Person', null, {});
		*/
	}
};
