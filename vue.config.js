const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir); // path.join(__dirname)设置绝对路径
}
module.exports = {
  devServer: {
    open: true, // 自动开启项目
  },
  // 别名的配置
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("components", resolve("./src/components"));
  },
   transpileDependencies: ['uview-ui'] // 这里可以添加其他需要被编译的 node_modules 里的库
};
