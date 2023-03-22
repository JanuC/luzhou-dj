<template>
  <view class="lesson-detail">
    <view class="image-box">
      <image src="/static/study/video.jpeg"></image>
    </view>
    <view class="lesson-info">
      <m-list-swiper :config="listConfig" @setCurrent="setCurrent">
        <template #introduce>
          <view class="introduce">
            <view class="introduce-title mb-20"
              >{{data.title}}</view
            >
            <view class="introduce-info mb-20">
              <view class="directory-total icon-box"
                ><u-icon color="$light-color" name="list-dot"></u-icon
                >共有{{data.directoryList.length}}个章节</view
              >
              <view class="person-total icon-box"
                ><u-icon color="$light-color" name="account"></u-icon
                >{{data.learnedPersonCount}}人学过</view
              >
            </view>
            <view class="introduce-content"
              >{{ data.introduce }}</view
            >
          </view>
        </template>
        <template #directory>
          <view class="directory-list">
            <view class="directory-list-item" v-for="(item, index) in data.directoryList" :key="index">
              <view class="directory-title">{{item.title}}</view>
              <view class="directory-info">
                <text>所需时长: {{item.time}}</text>
                <view class="directory-status" :class="{'completed': item.status===1}">{{ filterStatusToText(item.status) }}</view>
              </view>
            </view>
          </view>
        </template>
      </m-list-swiper>
    </view>
    <u-button>{{ filterButtonText(data.lessonStatus) }}</u-button>
  </view>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      listConfig: {
        current: 0,
        navbarList: [
          {
            value: "introduce",
            text: "课程简介",
          },
          {
            value: "directory",
            text: "目录",
          },
        ],
        title: "",
        noData: false,
      },
    };
  },
  computed: {
    // 根据状态返回不同的文本内容
    filterStatusToText(status) {
      return status => status === 1 ? "已完成" : "未完成"
    },
    // 根据课程的状态返回不同的文本内容
    filterButtonText(lessonStatus) {
      return (lessonStatus) => {
        // 已学完
        if (lessonStatus === 3) return "重新学习"
        // 已添加课程且已学习过
        if (lessonStatus === 2) return "继续学习"
        // 已添加未学习
        if (lessonStatus === 1) return "开始学习"
        // 未添加
        if (!lessonStatus) return "添加课程"
      }
    }
  },
  methods: {
    setCurrent(val) {
      this.listConfig.current = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.lesson-detail {
  width: calc(100% - 40rpx);
  height: 100%;
  margin: 0 20rpx;
  background-color: $white;
  display: flex;
  flex-direction: column;
  .image-box {
    width: 100%;
    image {
      width: 100%;
    }
  }
  .lesson-info {
    flex: 1;
    background-color: $white;
    // border-radius: 20rpx 20rpx 0 0;
    transform: translateY(-20rpx);
    .introduce {
      overflow-y: scroll;
      padding: 20rpx;
      &-title {
        font-weight: 700;
      }
      &-info {
        font-size: $base-font;
        display: flex;
        justify-content: space-between;
        color: $light-color;
        .icon-box {
          display: flex;
          align-items: center;
          .u-icon {
            margin-right: 10rpx;
          }
        }
      }
      &-content {
        font-size: $base-font;
      }
    }
    .directory-list {
      padding: 20rpx;
      &-item {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid $light-color;
        padding-bottom: 20rpx;
        margin-bottom: 20rpx;
        .directory-title {
          font-weight: 700;
        }
        .directory-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: $light-color;
          font-size: $base-font;
          .directory-status {
            background-color: $light-color;
            color: $white;
            padding: 10rpx 20rpx;
            border-radius: 30rpx;
          }
        }
      }
    }
  }
  .u-button {
    background-color: $primary-color;
    border-color: $primary-color;
    color: $white;
  
  }
}
.completed {
  background-color: $primary-color !important;
}
</style>
