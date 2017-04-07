'use strict';
module.exports = {
	up: function (queryInterface, Sequelize) {
		/*
		  Add altering commands here.
		  Return a promise to correctly handle asynchronicity.

		  Example:
		  return queryInterface.createTable('users', { id: Sequelize.INTEGER });
		*/

		return queryInterface.createTable('company_users',
			{
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true
				},
				companyId: {
					type: Sequelize.INTEGER,
					allowNull: false,
					key: 'id',
					field: 'company_id',
					references: {
						model: 'company',
						key: 'id'
					},
					onUpdate: 'cascade',
					onDelete: 'cascade'
				},
				userId: {
					type: Sequelize.INTEGER,
					allowNull: false,
					key: 'id',
					field: 'user_id',
					references: {
						model: 'user',
						key: 'id'
					},
					onUpdate: 'cascade',
					onDelete: 'cascade'
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

		return queryInterface.dropTable('company_users');

	}
};
