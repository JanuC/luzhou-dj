<template>
  <u-popup
    :show="isPopupShow"
    :round="10"
    closeable
    mode="center"
    @close="close"
    @open="open"
  >
    <view class="popup-content">
      <!-- <view class="content-title text-nowrap">积分明细</view> -->
      <slot name="content"></slot>
    </view>
  </u-popup>
</template>
<script>
export default {
  props: ['isPopupShow'],
  data() {
    return {
    };
  },
  methods: {
    open() {
      // console.log('open');
    },
    close() {
      this.$emit('closePopup', false);
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-content {
  width: 520rpx;
  max-height: 50vh;
  // border-radius: 20rpx;
  padding: 20rpx;
  overflow-y: scroll;
  // .content-title {
  //   width: 80%;
  //   // background: pink;
  //   margin: 0 auto;
  //   text-align: center;
  //   font-weight: 500;
  // }
}
</style>
