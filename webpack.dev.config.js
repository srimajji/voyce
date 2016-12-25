const autoprefixer = require('autoprefixer');
const merge = require('lodash/merge');
const normalize = require('postcss-normalize');
const path = require('path');
const webpack = require('webpack');

const bundles = require('./webpack.bundles');

const sharedConfig = {
	devtool: 'inline-source-map',
	// entry: [
	// 	'babel-polyfill',
	// 	// 'webpack/hot/dev-server',
	// 	// 'webpack-hot-middleware/client',
	// 	'./client/index.js'
	// ],
	// output: {
	// 	path: path.resolve(__dirname, '..', 'public/dist'),
	// 	filename: 'bundle.js',
	// 	publicPath: '/dist/'
	// },
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.OldWatchingPlugin(),
		// new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			'window.jQuery': 'jquery'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development'),
				'API_URL': JSON.stringify('http://localhost:3030/api/')
			}
		}),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		alias: {
			'react': path.resolve(__dirname, 'node_modules', 'react'),
		},
		extensions: ['', '.js', '.jsx', '.scss', '.css', '.jpg'],
		modulesDirectories: ['node_modules'],
	},
	postcss: [normalize, autoprefixer],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel'],
				exclude: path.join(__dirname, '../node_modules/'),
				include: path.join(__dirname, '/client/')
			},
			{
				test: /(\.css|\.scss)$/,
				loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap'],
				include: path.resolve(__dirname, 'client')
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
				loader: 'url-loader?limit=100000',
				//loader: 'file-loader?name=res/[name].[ext]?[hash]',
				include: path.resolve(__dirname, 'client')
			},
			{
				test: /\.json$/,
				loader: 'json'
			}

		]
	}
};

module.exports = merge({
	entry: bundles,
	output: {
		path: path.resolve(__dirname, '..', 'public/dist'),
		filename: '[name].bundle.js',
		publicPath: '/dist/'
	},
}, sharedConfig);
