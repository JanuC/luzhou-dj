<template>
  <view class="credit-breakdown-list">
    <view class="list-title">{{ type === 'personal' ? '个人积分明细' : '组织学分明细' }}</view>
    <view class="list-item" v-for="(item, index) in listData" :key="index">
      <view class="item-left">
        <view class="item-top">
          <text class="title" :class="{ 'status-add': item.status }">{{
            item.title
          }}</text>
          <text class="info text-nowrap">{{ item.info }}</text>
        </view>
        <view class="time">{{ item.time }}</view>
      </view>
      <view class="item-right" :class="{ 'status-add': item.status }"
        >{{ item.status ? "+" : "-" }}{{ item.score }}</view
      >
    </view>
  </view>
</template>

<script>
export default {
  props: ["type"],
  data() {
    return {
      listData: [
        {
          title: "学习",
          info: "缅怀一代文人邓小平",
          time: "2022-01-01 12:20:31",
          score: 5,
          status: 1,
        },
        {
          title: "减少学分",
          info: "三日未登录",
          time: "2022-01-10 14:00:00",
          score: 3,
          status: 0,
        },
        {
          title: "学习",
          info: "缅怀一代文人邓小平",
          time: "2022-01-01 12:20:31",
          score: 5,
          status: 1,
        },
        {
          title: "减少学分",
          info: "三日未登录",
          time: "2022-01-10 14:00:00",
          score: 3,
          status: 0,
        },
        {
          title: "学习",
          info: "缅怀一代文人邓小平",
          time: "2022-01-01 12:20:31",
          score: 5,
          status: 1,
        },
        {
          title: "减少学分",
          info: "三日未登录",
          time: "2022-01-10 14:00:00",
          score: 3,
          status: 0,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.credit-breakdown-list {
  width: 100%;
  height: 100%;
  .list-title {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    font-wight: 500;
    color: $primary-color;
  }
  .list-item {
    padding: 20rpx;
    border-bottom: 1px solid $whiteness-color;
    display: flex;
    font-size: $base-font;
    .item-left {
      flex: 1;
      display: flex;
      flex-direction: column;
      .item-top {
        flex: 1;
        font-size: $normal-font;
        font-weight: 500;
        .title {
          color: $primary-color;
          margin-right: 10rpx;
        }
      }
      .time {
        color: $light-color;
      }
    }
    .item-right {
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: $medium-font;
      font-weight: 500;
      color: $uni-color-error;
    }
  }
}
.status-add {
  color: #5ac725 !important;
}
</style>
