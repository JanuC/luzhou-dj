// 全局方法

import { filterStatus } from "./filterStatus";
export default {
  install: (Vue) => {
    Vue.prototype.filterStatus = filterStatus;
  },
};
