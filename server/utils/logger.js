'use strict';

// Example: https://github.com/eddyystop/feathers-starter-react-redux-login-roles/blob/master/server/utils/loggerProduction.js

const winston = require('winston');

winston.emitErrs = true;
const last2 = (numb) => `0${numb}`.slice(-2);
const logger = new winston.Logger({
	transports: [
		new winston.transports.Console({
			level: 'debug',
			handleExceptions: true,
			json: false,
			colorize: true,
			timestamp: () => {
				const date = new Date();
				return `${last2(date.getHours())}:${last2(date.getMinutes())}:${last2(date.getSeconds())}`;
			}
		})
	],
	exitOnError: false
});

module.exports = logger;
module.exports.stream = {
	write: function (message, encoding) {
		logger.info(message);
	}
};
