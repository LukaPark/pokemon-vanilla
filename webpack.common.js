const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "none",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|pages)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 10000,
						fallback: "file-loader",
						name: "[name].[ext]?[hash]",
						outputPath: "assets",
					},
				},
			},
		],
	},
	devServer: {
		port: 3000,
		hot: false,
		compress: true,
		historyApiFallback: true,
		open: true,
	},

	plugins: [
		new HtmlWebpackPlugin({
			// index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
			template: "./src/index.html",
			baseUrl: process.env.NODE_ENV == "development" ? "/" : "/pokemon/",
			// filename: "index.html",
			// template: path.resolve(__dirname, "./public/index.html"),
		}),
		new MiniCssExtractPlugin(),
	],
};
