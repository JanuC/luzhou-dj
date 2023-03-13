<template>
  <view class="wrap">
    <u-swiper keyName="image" :list="list"></u-swiper>
  </view>
</template>

<script>
import { getBanners } from "@/http/apis/banner";
export default {
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    this.list = await getBanners("/banner/getBanners");
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
