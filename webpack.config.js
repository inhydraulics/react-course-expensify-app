const path = require("path");
//const webpack = require("webpack");

module.exports = {
	entry: "./src/app.js",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
			},
			{
				test: /\.s?css$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	devtool: 'cheap-module-eval-source-map',
	output: {
		path: path.resolve(__dirname, "public"),
		//publicPath: "/dist/",
		filename: "bundle.js",
	},
	devServer: {
		contentBase: path.join(__dirname, "public"),
		port: 3000,
		//publicPath: "http://localhost:3000/dist/",
		historyApiFallback: true
	},
};
