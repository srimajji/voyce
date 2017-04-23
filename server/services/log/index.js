const auth = require('feathers-authentication').hooks;
const logger = require('../../utils/logger');

module.exports = {
	before: {
		create: [
			auth.verifyToken(),
			auth.populateUser(),
		],
	},
	create(data, params) {
		const payload = {};
		const logLevel = data.level || 'info';
		const user = params.user;

		if (user) {
			payload.user = {
				id: user.dataValues.id,
				email: user.dataValues.email,
			};
		}

		logger[logLevel](`CLIENT: ${data.msg}`, payload);

		// Note: Redux's action.payload will contain undefined instead of null
		return Promise.resolve(null);
	},
};
