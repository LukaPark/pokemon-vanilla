const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
		clean: true,
	},
	devServer: {
		port: 3000,
		hot: false,
		compress: true,
		historyApiFallback: true,
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.(svg|png|jpg|gif|mp4)$/,
				loader: "file-loader",
				options: {
					name: "assets/[contenthash].[ext]",
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
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
