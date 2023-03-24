<template>
  <view class="credit-information">
    <view class="title">
      <text>{{title}}</text>
      <text class="organize-title" v-if="data.name">｜{{ data.name }}</text>
    </view>
    <view class="information">
      <view class="credit-count">
        <text class="count">{{ data.count }}</text>
        <text class="text">学分</text>
      </view>
      <view class="credit-count">
        <text class="count">{{data.rank}}</text>
        <text class="text">排名</text>
      </view>
    </view>
    <view class="credit-breakdown" @click="sendClickType(type)">
      学分明细
    </view>
  </view>
</template>

<script>
export default {
  props: ['data', 'title', 'type'],
  methods: {
    sendClickType(value) {
      this.$emit('clickType', value)
    }
  },
}
</script>

<style lang="scss" scoped>
  .credit-information {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20rpx;
    .title {
      font-size: $normal-font;
      font-weight: 700;
      .organize-title {
        font-size: $base-font;
        color: $light-color;
      }
    }
    .information {
      flex: 1;
      display: flex;
      align-items: center;
      .credit-count {
        flex: 1;
        max-height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .count {
          font-size: $large-font;
          color: $primary-color;
          font-weight: 700;
        }
        .text {
          margin-top: 40rpx;
          color: $light-color;
          font-size: $base-font;
          font-weight: 700;
        }
      }
    }
    .credit-breakdown {
      font-size: $base-font;
      width: 140rpx;
      height: 40rpx;
      border: 1px solid $primary-color;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 40rpx;
      color: $primary-color;
      margin: 0 auto;
    }
  }
</style>
