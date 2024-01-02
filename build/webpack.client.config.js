const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  // 确保Webpack知道在浏览器环境中运行，默认就是web，因此可以忽略
  target: 'web',
  // 设置构建模式为开发模式
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
  // 配置source map以便调试。可以在浏览器的开发者工具中查看和调试原始源代码。
  // devtool: 'source-map',
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
  // 配置插件
  plugins: [
    new AssetsPlugin({
      path: path.resolve(__dirname, '../dist/client/'),
      filename: 'assets.json'
    }),
  ],
};