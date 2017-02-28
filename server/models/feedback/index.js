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
			allowNull: false
		},
		companyId: {
			type: Sequelize.INTEGER,
			allowNull: false,
			// model: sequelize.model('company'),
			// key: 'id',
			field: 'company_id'
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
