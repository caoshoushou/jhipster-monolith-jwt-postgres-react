// 补充缺失的environment模块，适配JHipster前端构建
const webpack = require('webpack');

module.exports = {
  // 开发环境配置
  dev: {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    output: {
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
    },
  },
  // 生产环境配置
  prod: {
    mode: 'production',
    devtool: 'source-map',
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].chunk.js',
    },
    plugins: [new webpack.optimize.AggressiveMergingPlugin()],
  },
  // 公共配置
  common: {
    context: __dirname,
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
  },
};
