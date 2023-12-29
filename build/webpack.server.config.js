const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node', // 确保 Node.js 内置模块不会被打包进去
  entry: './src/server.ts', // 应用程序的入口点
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'bundle.js'
  },
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.js', '.tsx'] // 解析这些扩展名的文件
  },
  module: {
    rules: [
      {
        test: /\.js$|ts$|tsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
          }
        },
        exclude: /node_modules/,
      }
    ]
  },
  externals: [nodeExternals()], // 排除 node_modules 中的所有模块
};