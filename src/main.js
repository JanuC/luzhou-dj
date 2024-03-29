import Vue from "vue";
import App from "./App";
import uView from "uview-ui";

import plugin from "@/utils/plugin"
// mock 数据
// require("./mock/index");

Vue.config.productionTip = false;

App.mpType = "app";
Vue.use(uView);
// 注册全局方法
Vue.use(plugin);
function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise((resolve, reject) => {
      res.then((res) => {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  },
});

const app = new Vue({
  ...App,
});
app.$mount();
