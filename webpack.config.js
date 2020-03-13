const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	devServer: {
		contentBase: path.join(process.cwd(), "dist"),
		compress: true,
		port: 8050
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(process.cwd(), "src", "index.html")
		})
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
				options: {
					interpolate: true
				}
			},
			{
				test: /\.(sass|scss)$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};