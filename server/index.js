'use strict';

const path = require('path');
const compress = require('compression');
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
	.use(compress())
	// serve webpack files via '/dist'
	.use(webpackDevMiddleware(webpackCompiler, {
		publicPath: webpackConfig.output.publicPath,
		stats: {
			assets: true,
			colors: true,
			version: false,
			hash: false,
			timings: true,
			chunks: false,
			chunkModules: false
		},
		noInfo: false,
		quiet: false,
	}))

	// serve public folder via '/'
	.use('/', feathers.static(path.join(root, 'public')))

	// serve public/dist folder via '/'
	.use('/', feathers.static(path.join(root, 'public/dist')))

	// serve sub-app feathers from api.js 
	.use('/api', api)

	// route everything else to client/react-router
	.get('/*', serveHtml)

	// set favicon
	.use(favicon(path.join(__dirname, '..', 'public/favicon.ico')))

	// set log config using the custom logger.js
	.use(morgan('combined', { 'stream': logger.stream }));

// .use(webpackHotMiddleware(webpackCompiler, {
// 	log: logger.info
// }))
const port = 3030;
const server = app.listen(port);
api.setup(server);

function serveHtml(req, res) {
	res.sendFile('index.html', { root: path.join(root, 'public') });
}

server.on('listening', () =>
	logger.info(`Feathers application started on localhost:${port}`)
);
