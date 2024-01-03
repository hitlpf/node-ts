const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // 为node环境打包代码，确保Node.js内置模块不会被打包进去
  target: 'node',
  // 应用程序的入口点
  entry: './src/server.ts',
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'bundle.js'
  },
  mode: 'production',
  resolve: {
    // 解析这些扩展名的文件
    extensions: ['.ts', '.js', '.tsx']
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
        // babel-loader不会转译任何在node_modules目录中的js、ts、tsx文件。
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                // 仅导出局部样式，将classname嵌入到html中，不生成 CSS 文件
                exportOnlyLocals: true,
              },
            },
          },
        ]
      },
    ]
  },
  // 排除node_modules中的所有模块
  externals: [nodeExternals()],
};
