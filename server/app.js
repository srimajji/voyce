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

const root = process.cwd();
const app = feathers();
const webpackCompiler = webpack(webpackConfig);

app.configure(configuration(path.join(__dirname, '..')));
logger.info(path.join(root, 'public'));
app.use(compress())
	.options('*', cors())
	.use(cors())
	.use(favicon(path.join(path.join(root, 'public'), 'favicon.ico')))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
	.use(morgan('combined', { 'stream': logger.stream }))
	.use(webpackDevMiddleware(webpackCompiler, {
		publicPath: webpackConfig.output.publicPath,
		stats: { colors: true },
		inInfo: true
	}))
	.use('/', serveStatic(path.join(root, 'public')))
	.all('/api/*', (res, req, next) => { next(); })
	.get('/*', serveHTML)

	// .use(webpackHotMiddleware(webpackCompiler, {
	// 	log: logger.info
	// }))
	.configure(hooks())
	.configure(rest())
	.configure(socketio())
	.configure(services)
	.configure(middleware)
function serveHTML(req, res, next) {
	res.sendFile(path.join(root, 'public/index.html'));
}

module.exports = app;
