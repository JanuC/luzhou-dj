// banner 相关接口

import { get } from "../service";

export const getBanners = async (url, id) => {
  return await get(url, id);
};
