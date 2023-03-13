// 新闻列表

import Mock, { Random } from "mockjs";
export default {
  getNews: (config) => {
    return {
      // data: [
      //   {
      //     id: 1,
      //     title: "第十九届全国人民代表大会第一次会议上的讲话",
      //     introduce: "",
      //   },
      // ],
      data: Mock.mock({
        "list|10": [
          {
            "id|+1": 1,
            image: Random.image("300x200", "#ce1126", Random.cword()),
            title: Random.ctitle(12, 20),
            text: Random.cparagraph(100),
            write_time: Random.datetime("yyyy-MM-dd HH:mm:ss"),
          },
        ],
      }),
      status: 200,
      message: "获取数据成功!",
    };
  },
};
