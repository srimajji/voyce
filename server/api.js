'use strict';

const path = require('path');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const socketio = require('feathers-socketio');
const middleware = require('./middleware');
const services = require('./services');

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

app.configure(hooks())
	.configure(rest())
	.configure(socketio({
		path: '/ws/'
	}))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({
		extended: true
	}))
	.configure(services)
	.configure(middleware);


module.exports = app;
