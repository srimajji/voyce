'use strict';

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const socketio = require('feathers-socketio');
const morgan = require('morgan');
const logger = require('./utils/logger');
const middleware = require('./middleware');
const services = require('./services');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.dev.config.js');

const app = feathers();
const webpackCompiler = webpack(webpackConfig);

app.configure(configuration(path.join(__dirname, '..')));

app.use(compress())
	.options('*', cors())
	.use(cors())
	.use(favicon( path.join(app.get('public'), 'favicon.ico') ))
	.use('/', serveStatic( app.get('public') ))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
	.use(morgan('combined', { 'stream': logger.stream }))
	.use(webpackDevMiddleware(webpackCompiler, { 
		publicPath: webpackConfig.output.publicPath, 
		stats: { colors: true },
		inInfo: true}))
	// .use(webpackHotMiddleware(webpackCompiler, {
	// 	log: logger.info
	// }))
	.configure(hooks())
	.configure(rest())
	.configure(socketio())
	.configure(services)
	.configure(middleware);

module.exports = app;
