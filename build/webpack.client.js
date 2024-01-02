const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  // 确保Webpack知道在浏览器环境中运行，默认就是web，因此可以忽略
  target: 'web',
  // 设置构建模式为开发模式
  mode: 'production',
  // 客户端的入口文件
  entry: {
    main: './src/client/index.tsx',
  },
  // 输出配置
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: "[name].[chunkhash:8].js",
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
  optimization: {
    minimize: true, // 压缩js，删除js中无用的webpack代码
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: false,
        default: false,
        vendor_react: {
          test: (module) => {
            return /[\\/]node_modules[\\/](react|react-dom)[\\/]/.test(module.resource);
          },
          name: 'vendor_react',
          chunks: 'all',
          priority: 10
        },
      }
    }
  },
  // 配置插件
  plugins: [
    new AssetsPlugin({
      path: path.resolve(__dirname, '../dist/client/'),
      filename: 'assets.json'
    }),
  ],
};