'use strict';

// company-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function () {
	const app = this;
	const sequelize = app.get('sequelize');
	const Feedback = sequelize.define('feedback', {
		title: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		description: {
			type: Sequelize.TEXT('long'),
			allowNull: false
		},
		type: {
			type: Sequelize.STRING,
			allowNull: true
		},
		companyId: {
			type: Sequelize.INTEGER,
			allowNull: false,
			field: 'company_id'
		},
		rating: {
			type: Sequelize.INTEGER,
			allowNull: false,
			field: 'rating'
		}
	},
		{
			freezeTableName: true,
			version: true,
			tableName: 'feedback',
			classMethods: {
				associate() {
					Feedback.belongsTo(sequelize.models['company']);
				}
			}

		});

	return Feedback;
};
