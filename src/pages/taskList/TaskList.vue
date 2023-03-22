<template>
  <view class="task-list pd-20">
    <m-list-swiper :config="listConfig" @setCurrent="setCurrent">
      <template #notComplete>
        <view class="list-container">
          <m-list-item
            v-for="item in notCompleteListData"
            :key="item.id"
            :data="item"
          >
            <template #itemInfo>
              <view class="item-info">
                <text>已学习:</text>
                <view class="progress">
                  <u-line-progress
                    :percentage="item.progress"
                    :activeColor="progressColor(item.progress)"
                    :showText="false"
                  ></u-line-progress>
                  <text :style="{color: progressColor(item.progress)}">{{item.progress}}%</text>
                </view>
              </view>
            </template>
          </m-list-item>
        </view>
      </template>
      <template #completed>
        <view class="list-container">
          <m-list-item
            v-for="item in completedListData"
            :key="item.id"
            :data="item"
          >
            <template #itemInfo>
              <view class="item-info">
                <text>已学习:</text>
                <view class="progress">
                  <u-line-progress
                    :percentage="item.progress"
                    :activeColor="progressColor(item.progress)"
                    :showText="false"
                  ></u-line-progress>
                  <text :style="{color: progressColor(item.progress)}">{{item.progress}}%</text>
                </view>
              </view>
            </template>
          </m-list-item>
        </view>
      </template>
    </m-list-swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 传递给list 的配置
      listConfig: {
        current: 0,
        navbarList: [
          {
            value: "notComplete",
            text: "待完成",
          },
          {
            value: "completed",
            text: "已完成",
          },
        ],
        title: "任务列表",
        noData: false
      },
      // 未完成列表数据
      notCompleteListData: [
        {
          id: 1,
          title: "习近平关于全面从严治党论述摘篇",
          image: "/static/study/video.jpeg",
          progress: Math.floor(Math.random() * 100),
        },
        {
          id: 2,
          title: "习近平关于全面从严治党论述摘篇",
          image: "/static/study/video.jpeg",
          progress: Math.floor(Math.random() * 100),
        },
        {
          id: 3,
          title: "习近平关于全面从严治党论述摘篇",
          image: "/static/study/video.jpeg",
          progress: Math.floor(Math.random() * 100),
        },
        {
          id: 4,
          title: "习近平关于全面从严治党论述摘篇",
          image: "/static/study/video.jpeg",
          progress: Math.floor(Math.random() * 100),
        },
        {
          id: 5,
          title: "习近平关于全面从严治党论述摘篇",
          image: "/static/study/video.jpeg",
          progress: Math.floor(Math.random() * 100),
        },
      ],
      // 已完成列表数据
      completedListData: [
        {
          id: 1,
          title: "习近平关于全面从严治党论述摘篇",
          image: "/static/study/video.jpeg",
          progress: 100
        },
      ]
    };
  },
  computed: {
    progressColor() {
      return (num) => (num < 30 ? "#dd524d" : num > 60 ? "#4cd964" : "#f0ad4e");
    },
  },
  methods: {
    setCurrent(val) {
      this.listConfig.current = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.task-list {
  height: 100%;
  .list-container {
    // height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item-info {
      // display: flex;
      margin-top: 10rpx;
      font-size: $base-font;
      .progress {
        display: flex;
        // margin-top: 10rpx;
        align-items: center;
        text {
          margin-left: 10rpx;
        }
      }
    }
  }
}
</style>
