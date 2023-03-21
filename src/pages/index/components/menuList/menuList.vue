<template>
  <view class="p-40 menu">
    <!-- <ul> -->
    <view
      class="menu-item"
      v-for="(item, index) in menuList"
      :key="index"
      @click="jumpToPage(item.url)"
    >
      <image :src="getMenuImgUrl(item.image)"> </image>
      <text>{{ item.title }}</text>
    </view>
    <!-- </ul> -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          image: "workbench.png",
          title: "工作指南",
          url: "/pages/workGuide/WorkGuide",
        },
        {
          image: "zhibu.png",
          title: "支部概况",
        },
        {
          image: "toupiao.png",
          title: "投票活动",
          url: "/pages/vote/Vote",
        },
        {
          image: "dangfei.png",
          title: "党费缴纳",
        },
        {
          image: "xuexi.png",
          title: "在线学习",
          url: "/pages/study/Study",
        },
        {
          image: "zuzhi.png",
          title: "组织生活",
          url: "/pages/organizeLife/OrganizeLife",
        },
        {
          image: "ganbu.png",
          title: "干部工作",
        },
        {
          image: "rencai.png",
          title: "人才工作",
        },
      ],
      // tabBar 页面
      // tabBarList: ['/pages/study/Study', '/pages/']
    };
  },
  methods: {
    getMenuImgUrl(url) {
      return `/static/menu/${url}`;
    },
    jumpToPage(url) {
      // 如果需要跳转的时 tabBar 页面，使用 switchTab
      if (url === "/pages/study/Study") {
        uni.switchTab({ url });
      } else {
        uni.navigateTo({
          url,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 400rpx;
  display: flex;
  flex-wrap: wrap;
  .menu-item {
    width: 25%;
    padding-bottom: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    image {
      width: 100rpx;
      height: 100rpx;
    }
    text {
      display: block;
      margin: 16rpx 0;
    }
  }
}
</style>
