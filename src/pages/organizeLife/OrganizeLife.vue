<template>
  <view class="organize">
    <view class="organize-top">
      <view class="icon-box">
        <!-- <view class="count">{{ meetingCount }}</view> -->
        <u-icon name="chat" color="#F98300" size="80"></u-icon>
      </view>
      <text>所有会议</text>
    </view>
    <view class="list">
      <MeetingItem
        v-for="item in meetingList"
        :key="item.id"
        :meetData="item"
      />
    </view>
    <view class="bottom">
      <view
        class="bottom-item"
        @click="pageTo('/pages/organizeLife/LaunchMeeting')"
      >
        <view class="img-box">
          <image src="@/static/meet/add.png"></image>
        </view>
        <text>发起会议</text>
      </view>
      <view
        class="bottom-item"
        @click="pageTo('/pages/organizeLife/MyMeeting')"
      >
        <view class="img-box">
          <image src="@/static/meet/my.png"></image>
        </view>
        <text>我的会议</text>
      </view>
      <view class="bottom-item">
        <view class="img-box">
          <image src="@/static/meet/note.png"></image>
        </view>
        <text>会议纪要</text>
      </view>
      <MeetPopup />
    </view>
  </view>
</template>

<script>
// import Bus from "@/utils/bus.js";
import MeetingItem from "./components/MeetingItem.vue";
import MeetPopup from "./components/MeetPopup.vue";
export default {
  components: {
    MeetingItem,
    MeetPopup,
  },
  data() {
    return {
      meetingList: [
        {
          id: 9,
          title: "九月党员大会",
          month: "2022-3",
          day: "12",
          week: "星期一",
          time: "11:00-12:00",
          sort: "党员大会",
          status: 1,
        },
        {
          id: 8,
          title: "八月党员大会",
          month: "2022-3",
          day: "12",
          week: "星期二",
          time: "11:00-12:00",
          sort: "党小组会",
          status: 1,
        },
        {
          id: 7,
          title: "八月党小组会",
          month: "2022-3",
          day: "22",
          week: "星期三",
          time: "11:00-12:00",
          sort: "党小组会",
          status: 2,
        },
        {
          id: 6,
          title: "八月党员干部培训会",
          month: "2022-3",
          day: "18",
          week: "星期四",
          time: "11:00-12:00",
          sort: "党员大会",
          status: 2,
        },
        {
          id: 5,
          title: "六月党员大会",
          month: "2022-3",
          day: "02",
          week: "星期天",
          time: "11:00-12:00",
          sort: "党员大会",
          status: -1,
        },
        {
          id: 4,
          title: "八月党员大会",
          month: "2022-3",
          day: "12",
          week: "星期五",
          time: "11:00-12:00",
          sort: "党员大会",
          status: -1,
        },
        {
          id: 3,
          title: "八月党员大会",
          month: "2022-3",
          day: "12",
          week: "星期六",
          time: "11:00-12:00",
          sort: "党员大会",
          status: -1,
        },
        {
          id: 2,
          title: "八月党员大会",
          month: "2022-3",
          day: "12",
          week: "星期一",
          time: "11:00-12:00",
          sort: "党员大会",
          status: 0,
        },
        {
          id: 1,
          title: "八月党员大会",
          month: "2022-3",
          day: "12",
          week: "星期一",
          time: "11:00-12:00",
          sort: "党员大会",
          status: 0,
        },
      ],
    };
  },
  mounted() {
    this.sortMeetList()
  },
  methods: {
    // showPopup() {
    //   Bus.$emit("isPopupShow", true);
    // },
    pageTo(url) {
      uni.navigateTo({
        url,
      });
    },
    sortMeetList() {
      this.meetingList.sort((a, b) => b.status- a.status)
    }
  },
};
</script>

<style lang="scss" scoped>
.organize {
  height: 100%;
  background: url("@/static/meeting-bg.jpeg") no-repeat center center;
  background-size: cover;
  padding: 20rpx;
  display: flex;
  flex-direction: column;
  &-top {
    flex: 3;
    // padding-top: 80rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: $white;
    .icon-box {
      width: 180rpx;
      height: 180rpx;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: relative;
      // .count {
      //   width: 50rpx;
      //   height: 50rpx;
      //   background-color: $primary-color;
      //   display: flex;
      //   justify-content: space-around;
      //   align-items: center;
      //   border-radius: 50%;
      //   position: absolute;
      //   right: 0;
      //   top: 10%;
      // }
    }
  }
  .list {
    flex: 8;
    overflow-y: scroll;
    background-color: $white;
    border-radius: 20rpx;
    padding: 20rpx;
  }
  .bottom {
    flex: 1;
    border-radius: 20rpx;
    margin-top: 40rpx;
    background-color: $white;
    padding: 20rpx;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      .img-box {
        flex: 2;
        image {
          width: 60rpx;
          height: 60rpx;
        }
      }
      text {
        flex: 1;
        font-size: $base-font;
      }
    }
  }
}
</style>
