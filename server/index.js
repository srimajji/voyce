'use strict';

const path = require('path');
const feathers = require('feathers');
const webpack = require('webpack');
const cors = require('cors');
const webpackDevMiddleware = require('webpack-dev-middleware');
const favicon = require('serve-favicon');
const morgan = require('morgan');
// const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.dev.config.js');
const logger = require('./utils/logger');
const webpackCompiler = webpack(webpackConfig);
const root = process.cwd();

const api = require('./api');
const app = feathers();

app.options('*', cors())
	.use(cors())
	.get('/', serveHtml)
	.use('/', feathers.static(path.join(root, 'public')))
	.use('/app', serveHtml)
	.use('/api', api)
	.use(favicon(path.join(__dirname, '..', 'public/favicon.ico')))
	.use(webpackDevMiddleware(webpackCompiler, {
		publicPath: webpackConfig.output.publicPath,
		stats: { colors: true },
		inInfo: true
	}))
	.use(morgan('combined', { 'stream': logger.stream }));

// .use(webpackHotMiddleware(webpackCompiler, {
// 	log: logger.info
// }))
const server = app.listen(3030);
api.setup(server);

function serveHtml(req, res) {
	res.sendFile('index.html', { root: path.join(root, 'public') });
}
server.on('listening', () =>
	logger.info(`Feathers application started on ${app.get('host')}:${3030}`)
);
