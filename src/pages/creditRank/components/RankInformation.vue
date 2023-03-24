<template>
  <view class="rank-information">
    <view class="list-container">
      <view class="top-three">
        <view
          class="item"
          :class="getTopThreeInfo(index).className"
          v-for="(item, index) in getTopThreeList"
          :key="item.id"
        >
          <view class="item-content">
            <image :src="getTopThreeInfo(index).image"></image>
            <u-avatar class="mb-20" :src="item.avatar"></u-avatar>
            <text class="name mb-20">{{ item.name }}</text
            ><view class="organize text-nowrap mb-20">
              {{ item.organize }}
            </view>
            <text class="count">{{ item.score }}</text>
          </view>
        </view>
      </view>
      <view class="top-other">
        <view class="item" v-for="(item, index) in data" :key="item.id">
          <text class="index">{{ index + 4 }}</text>
          <u-avatar :src="item.avatar"></u-avatar>
          <view class="user-info">
            <text class="name">{{ item.name }}</text>
            <text class="organize">{{ item.organize }}</text>
          </view>
          <text class="count">{{ item.score }}</text>
        </view>
      </view>
      <view class="no-more">没有更多了～</view>
    </view>
    <view class="my-rank">我的排名: 第 88 名</view>
  </view>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
  computed: {
    getTopThreeList() {
      if (this.data) return this.data.splice(0, 3);
    },
    getTopThreeInfo(idx) {
      return (idx) => {
        if (idx === 0)
          return { className: "one", image: `/static/study/NO.${idx + 1}.png` };
        if (idx === 1)
          return { className: "two", image: `/static/study/NO.${idx + 1}.png` };
        if (idx === 2)
          return {
            className: "three",
            image: `/static/study/NO.${idx + 1}.png`,
          };
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.rank-information {
  height: 100%;
}

.list-container {
  height: calc(100% - 80rpx);
  display: flex;
  flex-direction: column;
  background: $white;
  overflow-y: scroll;
  padding-bottom: 20rpx;
  .top-three {
    width: 100%;
    height: 500rpx;
    // background: pink;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background: $primary-color;
    padding-top: 40rpx;
    border-radius: 20rpx 20rpx 0 0;
    .item {
      flex: 1;
      // max-width: 30%;
      height: 85%;
      // background: skyblue;
      overflow: hidden;
      // padding-bottom: 40rpx;
      &.one {
        height: 100% !important;
        transform: translateX(100%);
      }
      &.two {
        transform: translateX(-100%);
      }
      .item-content {
        width: 90%;
        border-radius: 20rpx 20rpx 0 0;
        display: flex;
        flex-direction: column;
        // justify-content: space-around;
        padding-top: 20rpx;
        align-items: center;
        height: 100%;
        margin: 0 auto;
        background: $white;
        image {
          width: 60rpx;
          height: 60rpx;
          margin-bottom: 10rpx;
        }
        .name {
          font-size: $medium-font;
          // font-weight: 700;
        }
        .organize {
          color: $light-color;
          max-width: 80%;
        }
        .count {
          font-size: $large-font;
          color: $primary-color;
          font-weight: 700;
        }
      }
      // &.three {
      //   height: 80%;
      // }
    }
  }
  .top-other {
    // background: $white;
    // flex: 1;
    .item {
      display: flex;
      align-items: center;
      padding: 20rpx 20rpx;
      border-bottom: 1px solid $whiteness-color;
      .index {
        font-weight: 700;
        font-size: $medium-font;
      }
      .u-avatar {
        margin: 0 20rpx;
      }
      .user-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        .name {
          font-size: $medium-font;
          // font-weight: 700;
        }
        .organize {
          color: $light-color;
        }
      }
      .count {
        font-weight: 700;
        font-size: $medium-font;
        color: $primary-color;
      }
    }
  }
  .no-more {
    color: $light-color;
    margin-top: 20rpx;
    // font-size: $medium-font;
    text-align: center;
  }
}
.my-rank {
  width: 100%;
  height: 60rpx;
  background: $primary-color;
  color: $white;
  display: flex;
  border-radius: 20rpx 20rpx 0 0;
  justify-content: space-around;
  align-items: center;
}
</style>
