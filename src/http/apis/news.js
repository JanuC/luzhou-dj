// 新闻相关接口

import { get } from "../service";

export const getNews = async (id) => {
  return await get("news/getNews", id);
};

export const getOneNew = async (id) => {
  return await get("news/getOneNew", id);
};
