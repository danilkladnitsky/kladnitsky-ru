const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
require('dotenv').config({ path: './.env' });

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, 'src', 'index.tsx'),
      path.resolve(__dirname, 'src', 'styles/index.scss'),
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  context: path.join(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_[hash:base64:5]_.bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      { test: /\.svg$/, loader: 'file-loader' },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@import "styles/variables.scss";`,
            },
          }
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '*'],
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    fallback: {
      'react/jsx-runtime': 'react/jsx-runtime.js',
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
    },
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@ui': path.resolve(__dirname, 'src/ui'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@public': path.resolve(__dirname, 'public'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      ENV_VARS: JSON.stringify(process.env),
    }),
    new CopyPlugin({
      patterns: [
        { from: '../public', to: '', noErrorOnMissing: true },
      ],
    }),
  ],
  devServer: {
    port: 4000,
    compress: true,
    historyApiFallback: true,
  },
};