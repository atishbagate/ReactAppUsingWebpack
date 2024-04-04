const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    // define the mode https://webpack.js.org/configuration/mode/
    mode: "development",
    // to tell webpack where to target firstly https://webpack.js.org/concepts/entry-points/
    entry: path.resolve(__dirname, "src/index.js"),
    // output file to publish on server 
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    // defining plugins we are using  https://webpack.js.org/concepts/plugins/
    plugins: [
    //   this plugin ease out a html files on each save/changes  https://webpack.js.org/plugins/html-webpack-plugin/
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        // this plugin create css file as per js https://webpack.js.org/plugins/mini-css-extract-plugin/
        new MiniCssExtractPlugin(),
    ],
    // setting up parameters of dev server 
    devServer: {
        static: {
            // output path for build 
            directory: path.resolve(__dirname, "dist"),
        },
        // port on which react app will run locally
        port: 9001,
        open: true,
        // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
        historyApiFallback: true,
    },
    // An array of rules applied by default for modules.
    module: {
        // https://webpack.js.org/configuration/module/#rule
        rules: [
            // rules set for css files 
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
                // rules set for sass and scss files 
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
                // rules set for js and jsx files 
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
    // to optimize the build size configuration done here https://webpack.js.org/configuration/optimization/
    optimization: {
        // chuking of dependencies and re used things will be removed https://webpack.js.org/plugins/split-chunks-plugin/
        splitChunks: {
            chunks: "all"
        }
    }

}