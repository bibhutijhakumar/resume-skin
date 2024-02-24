const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      publicPath: '/cmp',

    }),

  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    host: '0.0.0.0',
    open: ['http://localhost:1000/'],
    port: 1000,
    historyApiFallback: true,
  },
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
    extensions: ["*", ".js", ".jsx"],
    alias: {
      'react': path.resolve(__dirname, './node_modules', 'react'),
      'react-dom': path.resolve("./node_modules/react-dom"),
      "Components": path.resolve(__dirname, 'src/common-components/')
    }
  }

};