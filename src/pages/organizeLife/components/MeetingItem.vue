<template>
  <view class="meeting" @click="showMeetInfo(meetData.id)">
    <view class="left">
      <text class="mouth">{{ meetData.month }}</text>
      <text class="day">{{ meetData.day }}</text>
      <text class="week">{{ meetData.week }}</text>
    </view>
    <view class="right">
      <view class="title">
        <view class="meet-title">{{ meetData.title }}</view>
        <view class="meet-status" :class="filterStatus(meetData.status).class">{{
          filterStatus(meetData.status).text
        }}</view>
      </view>
      <view class="desc">
        <view class="time">
          <u-icon class="icon" name="clock" color="#ccc" size="12"></u-icon
          >{{ meetData.time }}</view
        >
        <view class="sort">{{ meetData.sort }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import Bus from "@/utils/bus.js";
import { filterStatus } from "@/utils/filterStatus";
export default {
  props: ["meetData"],
  methods: {
    showMeetInfo(id) {
      Bus.$emit("isPopupShow", id);
    },
    
  },
};
</script>

<style lang="scss" scoped>
.meeting {
  height: 160rpx;
  // background-color: pink;
  display: flex;
  padding: 20rpx 0;
  border-bottom: 1px solid $light-color;
  .left {
    flex: 1;
    width: 120rpx;
    display: flex;
    flex-direction: column;
    background-color: $meeting-color;
    font-size: $base-font;
    color: $white;
    border-radius: 10rpx;
    text {
      text-align: center;
    }
    .day {
      font-size: $medium-font;
    }
  }
  .right {
    flex: 3;
    padding: 0 40rpx;
    display: flex;
    flex-direction: column;
    .title {
      flex: 3;
      display: flex;
      .meet-title {
        flex: 1;
      }
      .meet-status {
        width: 100rpx;
        height: 36rpx;
        font-size: $base-font;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
    .desc {
      flex: 2;
      display: flex;
      font-size: $base-font;
      .time {
        flex: 2;
        display: flex;
        align-items: center;
        color: $light-color;
        .icon {
          margin-right: 20rpx;
        }
      }
      .sort {
        flex: 1;
        border: 1px solid $meeting-color;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 40rpx;
        color: $meeting-color;
      }
    }
  }
}

</style>
