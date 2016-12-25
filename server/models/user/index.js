'use strict';

// user-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function () {
	const app = this;
	const sequelize = app.get('sequelize');

	const user = sequelize.define('user', {
		facebookId: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'facebook_id'
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

		// fields for feathers-authentication-management
		isVerified: {
			type: Sequelize.BOOLEAN,
			field: 'is_verified'
		},
		verifyToekn: {
			type: Sequelize.STRING,
			allowNul: false,
			field: 'verify_token'
		},
		verifyExpires: {
			type: Sequelize.DATE,
			field: 'verify_expires'
		},

		// sequelize mysql doesn't support Sequelize.ARRAY so get/set () are used to mimick
		// storing array of strings
		// https://stackoverflow.com/questions/25565212/how-to-define-array-of-objects-in-sequelize-js
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
		}
	},
		{
			freezeTableName: true
		});

	return user;
};
