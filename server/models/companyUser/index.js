'use strict';

// company-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function () {
	const app = this;
	const sequelize = app.get('sequelize');
	const companyUser = sequelize.define('companyUser', {
		companyId: {
			type: Sequelize.INTEGER,
			allowNull: false,
			unique: true,
			field: 'company_id'
		},
		userId: {
			type: Sequelize.INTEGER,
			allowNull: false,
			field: 'user_id'
		},
	},
		{
			freezeTableName: true,
			classMethods: {
				associate() {
					companyUser.belongsTo(sequelize.models['user']);
					companyUser.belongsTo(sequelize.models['company']);
				}
			}
		}
	);

	return companyUser;
};
