// 请求封装

import service from "./index";

export const get = (url, id) => {
  return new Promise(async (resolve, reject) => {
    if (id) {
      url = `${url}?id=${id}`;
    }
    const data = await service.get(url);
    resolve(data);
  });
};
