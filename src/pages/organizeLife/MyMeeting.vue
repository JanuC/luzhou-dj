<template>
  <view class="my-meet">
    <u-subsection
      :list="titleList"
      activeColor="#ce1126"
      :current="current"
      @change="changeCurrent"
    ></u-subsection>
    <view class="uni-margin-wrap">
      <swiper class="swiper" :current="current" @change="changeCurrent">
        <swiper-item>
          <view class="swiper-item uni-bg-red">
            <MeetingItem
              v-for="item in myJoinMeet"
              :key="item.id"
              :meetData="item"
            />
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-green">
            <MeetingItem
              v-for="item in myPublishMeet"
              :key="item.id"
              :meetData="item"
            />
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-blue">
            <MeetingItem
              v-for="item in endedMeet"
              :key="item.id"
              :meetData="item"
            />
          </view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import MeetingItem from "./components/MeetingItem.vue";
import { filterMeet } from "@/utils/filterMeet";
export default {
  data() {
    return {
      titleList: ["我参加的", "我发布的", "已结束"],
      current: 0,
      meetingList: [
        {
          id: 11,
          title: "九月党员大会",
          month: "2022-3",
          day: "12",
          week: "星期一",
          time: "11:00-12:00",
          sort: "党员大会",
          status: 1,
        },
        {
          id: 10,
          title: "八月党员大会",
          month: "2022-3",
          day: "12",
          week: "星期二",
          time: "11:00-12:00",
          sort: "党小组会",
          status: 1,
        },
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
      // 我参加的会议
      myJoinMeet: [],
      // 我发布的会议
      myPublishMeet: [
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
      ],
      // 已结束的会议
      endedMeet: [],
    };
  },
  components: {
    MeetingItem,
  },
  onLoad(options) {
    let { current } = options;
    if (current) this.current = current;
    this.myJoinMeet = filterMeet(this.meetingList, [2, 1, 0]);
    this.endedMeet = filterMeet(this.meetingList, [-1]);
  },
  // mounted() {
  //   this.myJoinMeet = filterMeet(this.meetingList, [2, 1, 0]);
  //   console.log(this.myJoinMeet);
  // },
  onBackPress(options) {
    if (options.from === "navigateBack") {
      return false
    }
    const page = getCurrentPages().pop();
    if (page.route === "pages/organizeLife/MyMeeting") {
      uni.navigateBack({
        delta: 2,
      });
      return true;
    }
    uni.navigateBack({
      delta: 1,
    });
    return true;
  },
  methods: {
    changeCurrent(idx) {
      if (typeof idx === "object") {
        this.current = idx.detail.current;
        return;
      }
      this.current = idx;
    },
  },
};
</script>
<style lang="scss" scoped>
.my-meet {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20rpx;
  .uni-margin-wrap {
    flex: 1;
    .swiper {
      height: 100%;
    }
    uni-swiper-item {
      overflow-y: scroll;
    }
  }
}
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
