// mock

import Mock from "mockjs";
import banner from "./modules/banner";
import news from "./modules/news";

Mock.setup({
  timeout: "300-600",
});

Mock.mock("/api/banner/getBanners", "get", banner.getBanners);
Mock.mock("/api/news/getNews", "get", news.getNews);
