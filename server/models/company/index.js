'use strict';

// company-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function () {
	const app = this;
	const sequelize = app.get('sequelize');
	const company = sequelize.define('company', {
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
			allowNull: false,
			get: function () {
				return JSON.parse(this.getDataValue('categories'));
			},
			set: function (val) {
				return this.setDataValue('categories', JSON.stringify(val));
			}
		},
		location: {
			type: Sequelize.STRING,
			allowNull: false
		},
		website: {
			type: Sequelize.STRING,
			allowNull: true
		}
	},
		{
			freezeTableName: true,
			classMethods: {
				associate() {
					company.hasMany(sequelize.model('feedback'));
				}
			}
		}
	);

	return company;
};
