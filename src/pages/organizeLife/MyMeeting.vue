<template>
  <view class="my-meet">
    <u-subsection :list="titleList"  activeColor="#ce1126" :current="current" @change="changeCurrent"></u-subsection>
    <view class="uni-margin-wrap">
    <swiper class="swiper" :current="current" @change="changeCurrent">
      <swiper-item>
        <view class="swiper-item uni-bg-red">A</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-green">B</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-blue">C</view>
      </swiper-item>
    </swiper>
  </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      titleList: ['我参加的', '我发布的', '已结束'],
      current: 0
    };
  },
  methods: {
    changeCurrent(idx) {
      if (typeof(idx) === 'object') {
        this.current = idx.detail.current
        return;
      }
      this.current = idx;
    }
  },
};
</script>
<style lang="scss" scoped>
// .uni-margin-wrap {
//   width: 690rpx;
//   width: 100%;
// }
// .swiper {
//   height: 300rpx;
// }
// .swiper-item {
//   display: block;
//   height: 300rpx;
//   line-height: 300rpx;
//   text-align: center;
// }
// .swiper-list {
//   margin-top: 40rpx;
//   margin-bottom: 0;
// }
// .uni-common-mt {
//   margin-top: 60rpx;
//   position: relative;
// }
// .info {
//   position: absolute;
//   right: 20rpx;
// }
// .uni-padding-wrap {
//   width: 550rpx;
//   padding: 0 100rpx;
// }
</style>
