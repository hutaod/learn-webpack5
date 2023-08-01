const path = require("path");

console.log(111)

/** @type {import("webpack").Configuration} */
module.exports = {
  /** 输入输出相关 */
  // 输出
  entry: "./src/index.js",
  // 输出
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist")
  },
  // // 上下文
  // context: {},

  // /** ​模块处理 */
  // // 用于配置模块路径解析规则，可用于帮助 Webpack 更精确、高效地找到指定模块
  // resolve: {},
  // 用于配置模块加载规则，例如针对什么类型的资源需要使用哪些 Loader 进行处理
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            // targets: {
            //   "chrome": "38",
            // }
          }
        }],
      }
    ]
  },
  // // 用于声明外部资源，Webpack 会直接忽略这部分资源，跳过这些资源的解析、打包操作
  // externals: {},

  // /** 后处理 */
  // // 用于控制如何优化产物包体积，内置 Dead Code Elimination、Scope Hoisting、代码混淆、代码压缩等功能
  // optimization: {},
  // // 用于配置编译产物的目标运行环境，支持 web、node、electron 等值，不同值最终产物会有所差异
  // target: {},
  // // 编译模式短语，支持 development、production 等值，可以理解为一种声明环境的短语
  // mode: {},

  // /** 开发效率 */
  // // 用于配置持续监听文件变化，持续构建
  // watch: true,
  // // 用于配置产物 Sourcemap 生成规则
  // devtool: true,
  // // 用于配置与 HMR 强相关的开发服务器功能
  // devServer: {}, 

  // /** 性能优化相关 */
  // // 用于配置当产物大小超过阈值时，如何通知开发者
  // performance: {},
  // // Webpack 5 之后，该项用于控制如何缓存编译过程信息与编译结果
  // cache: {},  

  // /** 日志 */
  // // 用于精确地控制编译过程的日志内容，在做比较细致的性能调试时非常有用
  // stats: {},
  // // 用于控制日志输出方式，例如可以通过该配置将日志输出到磁盘文件
  // infrastructureLogging: {},  
}