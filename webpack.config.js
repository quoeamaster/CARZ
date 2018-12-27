// setup the HtmlWebpack plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const webpack = require('webpack');

/**
 * actual exports for webpack configuration
 * @type {{plugins: *[], module: {rules: *[]}}}
 */
module.exports = {
  plugins: [
    htmlPlugin,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
            /*,
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true
            }
            */
          }
        ]
      },
      // MDB Roboto font
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)([a-z0-9]+)?$/,
        exclude: [ /vendors/, /img/],
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      // Font-awesome 4.7.X
      /*
      {
        test: /font.+\.(ttf|otf|eot|svg|woff(2)?)([a-z0-9]+)?$/,
        exclude: [/vendors/, /node_modules/, /img/],
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      */
      /*
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      */
      {
        test: /.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          useRelativePath: true
        }
      }
      /*,
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
      */
    ]
  }
};