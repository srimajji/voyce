const autoprefixer = require('autoprefixer');
const normalize = require('postcss-normalize');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: {
		newFeedback: ['babel-polyfill', './client/gripe/index.js'],
		dashboard: ['babel-polyfill', './client/dashboard/index.js']
	},
	output: {
		path: path.resolve(__dirname, 'public/dist'),
		filename: '[name].bundle.js',
	},
	resolveLoader: {
		modulesDirectories: [
			path.join(__dirname, 'node_modules')
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production'),
				'API_URL': JSON.stringify('http://localhost:3030/api/')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false },
			comments: false,
			sourceMap: false,
			mangle: false,
			minimize: true,
			verbose: false,
			beautify: true
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.NoErrorsPlugin(),
	],
	resolve: {
		alias: {
			'react': path.resolve(__dirname, 'node_modules', 'react'),
			'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom')
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
				exclude: path.join(__dirname, '/node_modules/'),
				include: path.join(__dirname, '/client/')
			},
			{
				test: /(\.css|\.scss)$/,
				loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap'],
				includes: [path.resolve(__dirname, 'client'), '/flexboxgrid/'],
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
