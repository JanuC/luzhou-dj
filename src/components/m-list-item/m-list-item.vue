<template>
  <view class="list-item box-shadow" @click="clickLesson(data.id)">
    <view class="item-top">
      <view class="image-box">
        <image :src="data.image"></image>
      </view>
      <view class="item-title">
        {{ data.title }}
      </view>
    </view>
    <slot name="itemInfo"></slot>
    
  </view>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    clickLesson(id) {
      uni.navigateTo({
        url: `/pages/lessonDetail/LessonDetail?id=${id}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-item {
    width: 48%;
    height: 260rpx;
    margin-right: 10rpx;
    margin-bottom: 20rpx;
    // background: skyblue;
    background: $white;
    border-radius: 20rpx;
    padding: 10rpx;
    display: flex;
    flex-direction: column;
    .item-top {
      flex: 3;
      position: relative;
      border-radius: 10rpx;
      overflow: hidden;
      .image-box {
        width: 100%;
        height: 100%;
        image{
          width: 100%;
          height: 100%;
        }
      }
      .item-title {
        width: 100%;
        position: absolute;
        font-size: $base-font;
        bottom: 0;
        background: rgba(0,0,0,.5);
        // font-size: $medium-font;
        color: $white;
      }
    }
    // .item-bottom {
    //   font-size: $base-font;
    //   margin-top: 10rpx;
    //   text-align: right;
    //   color: $uni-color-warning;
    // }
  }
</style>
