'use strict';

// company-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function () {
	const app = this;
	const sequelize = app.get('sequelize');
	const feedback = sequelize.define('feedback', {
		title: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		description: {
			type: Sequelize.STRING,
			allowNull: false
		},
		type: {
			type: Sequelize.STRING,
			allowNull: false
		},
		website: {
			type: Sequelize.STRING,
			allowNull: true
		}
	},
		{
			freezeTableName: true
		});

	return feedback;
};
