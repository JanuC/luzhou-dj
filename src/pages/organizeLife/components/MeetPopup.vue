<template>
  <view>
    <u-popup
      :show="show"
      mode="center"
      :round="10"
      :closeable="true"
      @close="close"
      @open="open"
    >
      <view class="meet-popup">
        <!-- <m-load /> -->

        <view class="title">{{ meetInfo.title }}</view>
        <view class="meet-info">
          <view class="image-box">
            <image :src="meetInfo.image"></image>
          </view>
          <view class="desc">{{ meetInfo.desc }}</view>
          <view class="time">会议时间：{{ meetInfo.time }}</view>
          <view class="agenda">
            <view class="agenda-title">议程:</view>
            <u-steps current="-1" direction="column">
              <u-steps-item v-for="item in agendaList" :key="item.time" :title="item.title" :desc="item.time"> </u-steps-item>
            </u-steps>
          </view>
          <view class="address">参会地址：{{ meetInfo.address }}</view>

          <view class="originators">发起者: {{ meetInfo.originators }}</view>
          <view>参与人数: {{ meetInfo.count }}人</view>
        </view>
        <view v-if="isMyMeet" class="button-box">
          <u-button class="item">签到</u-button>
          <u-button class="item">请假</u-button>
        </view>
        <u-button v-else class="apply" @click="applyJoin">申请参加</u-button>
      </view>
    </u-popup>
  </view>
</template>
<script>
import Bus from "@/utils/bus.js";

export default {
  data() {
    return {
      show: false,
      meetInfo: {
        title: "八月党干部培训",
        desc: "应上级要求，召开党干部培训大会，各级党员干部必须参加，未参加者将进行严惩！",
        image: "/static/meet/meet.png",
        address: "泸州市江阳区政府",
        time: "2022-03-22 10:00-12:00",
        count: 20,
        originators: "李甜甜",
      },
      agendaList: [
        {
          title: "会议签到",
          time: "03-10 09:00 至 03-10 09:20",
        },
        {
          title: "会议进行",
          time: "03-10 09:20 至 03-10 11:20",
        },
        {
          title: "会议结束",
          time: "03-10 11:30"
        }
      ],
      isMyMeet: false,
    };
  },
  mounted() {
    Bus.$on("isPopupShow", (flag) => {
      this.show = true;
    });
  },
  methods: {
    open() {
      // console.log('open');
    },
    close() {
      this.show = false;
      // console.log('close');
    },
    // 申请参加会议
    applyJoin() {
      this.isMyMeet = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.meet-popup {
  // width: 100%;
  width: 520rpx;
  height: 50vh;
  padding: 20rpx;
  font-size: $base-font;
  display: flex;
  flex-direction: column;
  view {
    margin-bottom: 20rpx;
  }
  .meet-info {
    flex: 1;
    overflow-y: scroll;
  }
  .title {
    padding-right: 60rpx;
    font-size: $medium-font;
    color: $primary-color;
  }
  .image-box {
    width: 100%;
    margin: 0 auto;
    image {
      width: 100%;
      height: 260rpx;
    }
  }
  .apply {
    background-color: $primary-color;
    border-color: $primary-color;
    color: $white;
  }
  .button-box {
    display: flex;
    justify-content: space-between !important;
    .item {
      margin: 0;
      width: 45%;
      &:first-child {
        background-color: $meeting-color;
        border-color: $meeting-color;
        color: $white;
      }
    }
  }
}
</style>
