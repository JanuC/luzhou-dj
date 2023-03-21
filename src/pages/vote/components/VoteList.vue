<template>
  <view class="vote-list">
    <view class="vote-list-item" v-for="(item, index) in voteData" :key="index">
      <u-avatar src="https://cdn.uviewui.com/uview/album/2.jpg"></u-avatar>
      <text class="name">刘亦菲</text>
      <u-button :plain="true" text="投他一票" size="mini"></u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      voteData: new Array(20).fill(null)
    }
  }
}
</script>

<style lang="scss" scoped>
  .vote-list {
    flex: 1;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    // justify-content: space-between;
    &-item {
      width: 33.33%;
      height: 200rpx;
      // background-color: pink;
      margin-bottom: 20rpx;
      display: flex;
      flex-direction: column;
      justify-content:space-around;
      align-items: center;
      .u-button {
        width: 80%;
        color: $primary-color;
        border-color: $primary-color;
        &.u-button--active {
          background-color: $primary-color;
          color: $white;
        }
      }
    }
  }
</style>
