'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		/*
		  Add altering commands here.
		  Return a promise to correctly handle asynchronicity.
	
		  Example:
		  return queryInterface.createTable('users', { id: Sequelize.INTEGER });
		*/

		return queryInterface.createTable('user',
			{

				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true
				},
				facebookId: {
					type: Sequelize.STRING,
					allowNull: true,
					field: 'facebook_id'
				},
				name: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				email: {
					type: Sequelize.STRING,
					allowNull: false,
					unique: true
				},
				password: {
					type: Sequelize.STRING,
					allowNull: false
				},
				roles: {
					type: Sequelize.STRING,
					allowNull: false
				},
				createdAt: {
					type: Sequelize.DATE,
					defaultValue: Sequelize.NOW,
					field: 'created_at'
				},
				updatedAt: {
					type: Sequelize.DATE,
					defaultValue: Sequelize.NOW,
					field: 'updated_at',
				},
			},
			{
				engine: 'InnoDB',
				charset: 'latin1'
			}
		);


	},

	down: function (queryInterface, Sequelize) {
		/*
		  Add reverting commands here.
		  Return a promise to correctly handle asynchronicity.
	
		  Example:
		  return queryInterface.dropTable('users');
		*/
		return queryInterface.dropTable('user');
	}
};
