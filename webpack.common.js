const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const publicPath = '/cmp/';

module.exports = {
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "build"),
      // We inferred the "public path" (such as / or /my-project) from homepage.
      publicPath: publicPath,
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
  
    ],
    module: {
        // exclude node_modules
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
          },
          {
            test: /\.css$/i,
            include: path.resolve(__dirname, 'src'),
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    // pass all js files through Babel
    resolve: {
        extensions: ["*", ".js",".jsx"],
        alias: { 'react': path.resolve(__dirname, './node_modules', 'react'),
        'react-dom': path.resolve("./node_modules/react-dom"),
        "Components": path.resolve(__dirname, 'src/common-components/')
        }
    }
  };