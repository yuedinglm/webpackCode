
const path = require("path")
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口
    entry:"./src/main.js",
    // 输出
    output:{
        path:path.join(__dirname,"../dist"),
        filename:"static/js/main.js",
        clean:true,
    },
    module:{
        // loader 的配置
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/i,
                use: [
                // compiles Less to CSS
                'style-loader',
                'css-loader',
                'less-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // 将 JS 字符串生成为 style 节点
                  'style-loader',
                  // 将 CSS 转化成 CommonJS 模块
                  'css-loader',
                  // 将 Sass 编译成 CSS
                  'sass-loader',
                ],
              },
              {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader',
                  ],
              },
              {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: 'asset',
               parser: { // 图片转BASE64编码
                 dataUrlCondition: {
                   maxSize: 4 * 1024 // 4kb
                 }
               },
               generator: { // 修改图片路径
                    filename: 'static/images/[hash:5][ext][query]'
                }
              },
              {
                test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
                type: 'asset/resource', // 处理矢量图，音频等文件
                generator: { // 修改图片路径
                    filename: 'static/media/[hash:5][ext][query]'
                }
              },
              {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
              }
        ],
    },
    plugins: [
      new ESLintPlugin({
        context:path.join(__dirname,'../src')
      }),
      new HtmlWebpackPlugin(
        {template: path.join(__dirname,'../public/index.html')}
      )
    ],
    mode:'production'
}