<template>
  <view class="news-context">
    <view class="title">{{ newInfo.title }}</view>
    <view class="time">发布于：{{ newInfo.write_time }}</view>
    <view class="image">
      <image :src="newInfo.image"></image>
    </view>
    <view class="text">{{ newInfo.text }}</view>
  </view>
</template>

<script>
import { getOneNew } from "@/http/apis/news";
export default {
  data() {
    return {
      newInfo: {},
    };
  },
  async onLoad(options) {
    const { id } = options;
    console.log(id);
    if (id) {
      this.newInfo = await getOneNew();
      console.log(this.newInfo);
    }
  },
};
</script>

<style lang="scss" scoped>
.news-context {
  width: 100%;
  padding: 20rpx;
  view {
    margin: 20rpx 0;
  }
  .title {
    font-size: $large-font;
  }
  .time {
    color: $light-color;
    text-align: right;
    font-size: $base-font;
  }
  .image {
    display: flex;
    justify-content: space-around;
  }
  .text {
    text-indent: 2em;
  }
}
</style>
