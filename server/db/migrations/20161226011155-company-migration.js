'use strict';
module.exports = {
	up: function (queryInterface, Sequelize) {
		/*
			Add altering commands here.
			Return a promise to correctly handle asynchronicity.

			Example:
			return queryInterface.createTable('users', { id: Sequelize.INTEGER });
		*/

		return queryInterface.createTable('company',
			{
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true
				},
				alias: {
					type: Sequelize.STRING,
					allowNull: false,
					unique: true
				},
				name: {
					type: Sequelize.STRING,
					allowNull: false
				},
				categories: {
					type: Sequelize.STRING,
					allowNull: false
				},
				location: {
					type: Sequelize.STRING,
					allowNull: false
				},
				website: {
					type: Sequelize.STRING,
					allowNull: true
				},
				createdAt: {
					type: Sequelize.DATE,
					defaultValue: Sequelize.NOW,
					field: 'created_at'
				},
				updatedAt: {
					type: Sequelize.DATE,
					defaultValue: Sequelize.NOW,
					field: 'updated_at'
				}
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

		return queryInterface.dropTable('company');

	}
};
