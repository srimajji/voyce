'use strict';

const authentication = require('feathers-authentication');
const authManagement = require('feathers-authentication-management'); // eslint-disable-line no-unused-vars
const logger = require('../../utils/logger'); // eslint-disable-line no-unused-vars
const FacebookStrategy = require('passport-facebook').Strategy;
const FacebookTokenStrategy = require('passport-facebook-token');

module.exports = function () {
	const app = this;

	let config = app.get('auth');

	config.facebook.strategy = FacebookStrategy;
	config.facebook.tokenStrategy = FacebookTokenStrategy;

	app.set('auth', config);
	app.configure(authentication(config));
};
