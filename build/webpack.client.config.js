const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  // 设置构建模式为生产模式
  mode: 'production',
  // 客户端的入口文件
  entry: './src/client/index.tsx',
  // 输出配置
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  // 解析配置
  resolve: {
    // 添加 '.ts' 和 '.tsx' 作为可解析扩展
    extensions: ['.ts', '.tsx', '.js', '.jsx']
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
  // 配置插件，例如 HtmlWebpackPlugin 等
  plugins: [
    new AssetsPlugin({
      path: path.resolve(__dirname, '../dist/client/'),
      filename: 'assets.json'
    }),
  ],
  // 确保 Webpack 知道在浏览器环境中运行
  target: 'web',
  // 配置 source map 以便调试
  // devtool: 'source-map'
};