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
				isVerified: {
					type: Sequelize.BOOLEAN,
					field: 'is_verified'
				},
				verifyToken: {
					type: Sequelize.STRING,
					allowNull: false,
					field: 'verify_token'
				},
				verifyExpires: {
					type: Sequelize.DATE,
					field: 'verify_expires'
				},

				verifyChanges: {
					type: Sequelize.STRING,
					field: 'verify_changes',
					get: function () {
						return JSON.parse(this.getDataValue('verifyChanges'));
					},
					set: function (val) {
						return this.setDataValue('verifyChanges', JSON.stringify(val));
					}
				},
				resetToken: {
					type: Sequelize.STRING,
					field: 'reset_token'
				},
				resetExpires: {
					type: Sequelize.DATE,
					field: 'reset_expires'
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
		return queryInterface.dropTable('user');
	}
};
