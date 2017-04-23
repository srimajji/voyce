'use strict';

// company-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function () {
	const app = this;
	const sequelize = app.get('sequelize');
	const Company = sequelize.define('company', {
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
		},
		enabled: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		},
		status: {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: 'TRIAL'
		}
	},
		{
			freezeTableName: true,
			version: true,
			tableName: 'company',
			classMethods: {
				associate() {
					Company.hasMany(sequelize.models['feedback']);
					Company.belongsToMany(sequelize.models['user'], { through: { model: sequelize.models['companyUser'] } });
				}
			}
		}
	);

	return Company;
};
