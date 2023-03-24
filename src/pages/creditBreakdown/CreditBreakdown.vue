<template>
  <view class="credit-breakdown">
    <view class="top-info">
      <view class="user">
        <u-avatar src="https://cdn.uviewui.com/uview/album/1.jpg"></u-avatar>
        <view class="user-info">
          <text class="name">李书俊</text>
          <text class="organize">中旗红党委</text>
        </view>
      </view>
      <view class="credit" @click="showPopup('rules')">学分规则</view>
    </view>
    <view class="credit-list">
      <m-time-select class="time-select" />
      <view class="credit-info">
        <view class="personal-credit">
          <CreditInfo title="个人学分" type="personal" :data="personalData" @clickType="clickType" />
        </view>
        <view class="organize-credit">
          <CreditInfo title="组织学分" type="organize" :data="organizeData" @clickType="clickType" />
        </view>
      </view>
      <view class="credit-rank">
        <view class="personal-rank" @click="jumpToRank('all')">
          <image src="/static/study/personal.png"></image>
          <text>个人排行榜</text>
        </view>
        <view class="organize-rank" @click="jumpToRank('organize')">
          <image src="/static/study/organize.png"></image>
          <text>组织排行榜</text>
        </view>
      </view>
    </view>
    <m-popup-slot :isPopupShow="isPopupShow" @closePopup="closePopup">
      <template #content>
        <CreditRules v-if="popupShowType === 'rules'" />
        <CreditList v-else :type="popupShowType" />
      </template>
    </m-popup-slot>
  </view>
</template>

<script>
import CreditInfo from "./components/CreditInfo.vue";
import CreditRules from './components/CreditRules.vue';
import CreditList from './components/CreditList.vue';
export default {
  components: {
    CreditInfo,
    CreditRules,
    CreditList
  },
  data() {
    return {
      personalData: {
        count: 88,
        rank: 2,
      },
      organizeData: {
        name: "中旗红党委",
        count: 28,
        rank: 3,
      },
      isPopupShow: false,
      popupShowType: ""
    };
  },
  methods: {
    showPopup(type) {
      this.popupShowType = type;
      this.isPopupShow = true;
    },
    closePopup(val) {
      this.isPopupShow = val;
    },
    clickType(val) {
      this.showPopup(val)
    },
    jumpToRank(type) {
      let current = 0;
      if (type === "organize") current = 1;
      uni.navigateTo({
        url: `/pages/creditRank/CreditRank?current=${current}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.credit-breakdown {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // background: pink;
  .top-info {
    width: 100%;
    height: 200rpx;
    background: #ec2c36;
    color: $white;
    padding: 40rpx;
    font-size: $base-font;
    display: flex;
    // align-items: center;
    padding-bottom: 40rpx;
    .user {
      flex: 1;
      display: flex;
      .u-avatar {
        margin: 0 20rpx;
      }
      &-info {
        display: flex;
        flex-direction: column;
        .name {
          margin-bottom: 20rpx;
          font-weight: 700;
          font-size: $medium-font;
        }
      }
    }
    .credit {
      width: 140rpx;
      height: 40rpx;
      background: $white;
      color: $primary-color;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 20rpx;
    }
  }
  .credit-list {
    flex: 1;
    // background: $white;
    margin: 0 40rpx;
    transform: translateY(-40rpx);
    border-radius: 20rpx;
    display: flex;
    flex-direction: column;
    // border: 1px solid $whiteness-color;
    .time-select {
      padding: 20rpx;
      border: 1px solid $whiteness-color;
      border-radius: 20rpx 20rpx 0 0;
      background: $white;
    }
    .credit-info {
      flex: 1;
      background: $white;
      border-radius: 0 0 20rpx 20rpx;
      border: 1px solid $whiteness-color;
      border-top: 0;
      display: flex;
      flex-direction: column;
      .personal-credit {
        flex: 1;
        padding: 20rpx;
        position: relative;
        // border-bottom: 1px dotted $whiteness-color;
        &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          height: 1px;
          border-bottom: 1px dotted $whiteness-color;
        }
      }
      .organize-credit {
        flex: 1;
        padding: 20rpx;
      }
    }
    .credit-rank {
      width: 100%;
      height: 160rpx;
      border: 1px solid $whiteness-color;
      margin-top: 20rpx;
      padding: 20rpx 0;
      border-radius: 20rpx;
      background: $white;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .personal-rank,
      .organize-rank {
        width: 160rpx;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        image {
          width: 80rpx;
          height: 80rpx;
        }
        text {
          font-size: $normal-font;
          font-weight: 500;
        }
      }
    }
  }
  .u-popup {
    flex: 0;
  }
  
}
</style>
