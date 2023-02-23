const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('lodash');
const path = require('path'); // node.js的路径模块

module.exports = {
  mode: "development", // 'development' | 'production'
  devtool: 'eval-cheap-module-source-map', // development
  entry: './src/EasyAvg.ts',// 入口文件
  //externals: ['lodash'],
  // 插件
  // plugins: [new HtmlWebpackPlugin({template:"./src/index.html"})],
  // *** 模块选项中匹配的文件会通过 loaders 来转换
  module: {
    rules: 
    [
      // 默认配置
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // 图片文件
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset", // 一般会转换为 "asset/resource"
      },
      // css资源
      {
        test: /\.css$/i,
        use: ["style-loader","css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  output:
  {
    // filename: 'user.js',filename: "test.js",
    path: path.resolve(__dirname, 'bin'), //打包后的路径
    filename: 'EasyAvg-core.js', //打包后的文件名
    library: "EasyAvgCore" // 打包成库
  }
};