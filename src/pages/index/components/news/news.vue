<template>
  <view class="news p-40">
    <view class="news-title">
      <text class="title">新闻资讯</text>
      <text class="more">查看更多</text>
    </view>
    <view class="news-content">
      <text>第十九届全国人民代表大会第一次会议上的讲话</text>
      <text>第十九届全国人民代表大会第一次会议上的讲话</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.news {
  &-title {
    .title {
      font-weight: 700;
    }
    .more {
      float: right;
      color: #ccc;
    }
  }
  &-content {
    margin-top: 20rpx;
    text {
      display: block;
      padding: 10rpx 0;
    }
  }
}
</style>
