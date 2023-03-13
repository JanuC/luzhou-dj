// banner 轮播图

export default {
  getBanners: (config) => {
    return {
      data: [
        {
          image: "/static/swiper/1.jpg",
          url: "",
        },
        {
          image: "/static/swiper/2.jpg",
          url: "",
        },
        {
          image: "/static/swiper/3.jpg",
          url: "",
        },
      ],
      status: 200,
      message: "获取数据成功!",
    };
  },
};
