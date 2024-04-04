const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 9001,
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [["postcss-preset-env", {}]],
                        }
                    }
                }]
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [["postcss-preset-env", {}]],
                        }
                    }
                },
                    "sass-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                exclude: path.resolve(__dirname, "node_modules"),
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: "defaults"
                                    }
                                ],
                                "@babel/preset-react",
                            ],
                        }
                    },

                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }

}