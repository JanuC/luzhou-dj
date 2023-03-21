<template>
  <!-- 学习 -->
  <view class="study pd-20">
    <view class="profile mb-20 box-shadow">
      <view class="title">
        学习档案
        <!-- <text class="more">查看更多</text> -->
      </view>
      <view class="content">
        <view class="task-list content-item">
          <view class="image-box">
            <image src="/static/study/list.png"></image>
          </view>
          <text>任务列表</text>
        </view>
        <view class="credit-rank content-item">
          <view class="image-box">
            <image src="/static/study/rank.png"></image>
          </view>
          <text>学分排名</text>
        </view>
        <view class="credit-breakdown content-item">
          <view class="image-box">
            <image src="/static/study/breakdown.png"></image>
          </view>
          <text>学分明细</text>
        </view>
      </view>
    </view>
    <view class="lessons mb-20 box-shadow">
      <view class="title">学习课程</view>
      <view class="content">
        <view class="content-item">
          <view class="item-title"> 文件精神 </view>
          <view class="item-list">
            <view class="item-list-item">内容</view>
            <view class="item-list-item">内容</view>
            <view class="item-list-item">内容</view>
          </view>
          <view class="more">查看更多</view>
        </view>
        <view class="content-item">
          <view class="item-title"> 党史学习 </view>
          <view class="item-list">
            <view class="item-list-item">内容</view>
            <view class="item-list-item">内容</view>
            <view class="item-list-item">内容</view>
          </view>
          <view class="more">查看更多</view>
        </view>
        <view class="content-item">
          <view class="item-title"> 在线视频 </view>
          <view class="item-list video">
            <view class="item-list-item">内容</view>
            <view class="item-list-item">内容</view>
            <view class="item-list-item">内容</view>
          </view>
          <view class="more">查看更多</view>
        </view>
      </view>
    </view>
    <view class="answers mb-20 box-shadow">
      <view class="title">专项答题</view>
      <view class="content">
        <view class="content-item">
          <view class="image-box">
            <image src="/static/study/answer.png"></image>
          </view>
          <text>开始答题</text>
        </view>
        <view class="content-item">
          <view class="image-box">
            <image src="/static/study/parse.png"></image>
          </view>
          <text>查看解析</text>
        </view>
      </view>
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
.study {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .title {
    font-size: $medium-font;
    font-weight: 700;
    color: $primary-color;
    // display: flex;
    // justify-content: space-between;
    // .more {
    //   font-size: $base-font;
    //   color: $light-color;
    //   font-weight: normal;
    // }
  }
  .mb-20 {
    background-color: $white;
    border-radius: 20rpx;
    padding: 20rpx;
    display: flex;
    flex-direction: column;
    .content {
      flex: 1;
      margin-top: 20rpx;
      display: flex;
      &-item {
        flex: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        display: flex;
        flex-direction: column;
        .image-box {
          width: 80rpx;
          height: 80rpx;
          image {
            width: 100%;
            height: 100%;
          }
        }
        text {
          font-size: $base-font;
          // color: $primary-color;
          font-weight: 700;
        }
      }
    }
  }
  .profile {
    flex: 1;
  }
  .lessons {
    flex: 4;
    .content {
      flex-direction: column;
      &-item {
        flex: 1;
        align-items: flex-start;
        justify-content: flex-start;
        font-size: $base-font;
        display: flex;
        flex-direction: column;
        margin-bottom: 20rpx;
        border-bottom: 1px solid $primary-color;
        padding: 10rpx;
        .item-title {
          width: 100%;
          padding: 4rpx 0;
          display: flex;
          justify-content: space-around;
          color: $primary-color;
          font-weight: 400;
          background-color: $primary-color;
          color: $white;
          border-radius: 10rpx;
        }
        .item-list {
          flex: 1;
          padding-top: 20rpx;
          display: flex;
          // padding: 10rpx 10rpx;
          flex-direction: column;
          justify-content: space-around;
          &-item {
            flex: 1;
          } 
          
        }
        .video {
          width: 100%;
          flex-direction: row;
        }
        .more {
          width: 100%;
          text-align: right;
          color: $primary-color;
          font-size: $base-font;
        }
      }
    }
  }
  .answers {
    flex: 1;
    margin-bottom: 0;
  }
}
</style>
