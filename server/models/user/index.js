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
			allowNull: false,
			get: function () {
				return JSON.parse(this.getDataValue('roles'));
			},
			set: function (val) {
				return this.setDataValue('roles', JSON.stringify(val));
			}
		}
		// sequelize mysql doesn't support Sequelize.ARRAY so get/set () are used to mimick
		// storing array of strings
		// https://stackoverflow.com/questions/25565212/how-to-define-array-of-objects-in-sequelize-js
	},
		{
			freezeTableName: true
		});

	return user;
};
