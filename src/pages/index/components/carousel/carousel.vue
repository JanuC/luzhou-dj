<template>
  <view class="wrap">
    <u-swiper keyName="image" :list="list"></u-swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          image: "/static/swiper/1.jpg",
        },
        {
          image: "/static/swiper/2.jpg",
        },
        {
          image: "/static/swiper/3.jpg",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "uview-ui/index.scss";
.wrap {
  padding: 20rpx 40rpx;
  // height: 500rpx;
}
</style>
