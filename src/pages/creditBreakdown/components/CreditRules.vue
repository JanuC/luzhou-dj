<template>
  <view class="credit-rules">
    <view class="content-title text-nowrap">学分规则</view>
    <view class="content-list">
      <view class="add">
        <view class="add-text">获得积分:</view>
        <text v-for="(item, index) in computedAddCreditRules" :key="index"
          >{{ index + 1 }}. {{ item.text
          }}<text class="add-credit"> +{{ item.score }}</text></text
        >
      </view>
      <view class="deduct">
        <view class="deduct-text">扣除积分:</view>
        <text v-for="(item, index) in computedDeductCreditRules" :key="index"
          >{{ index + 1 }}. {{ item.text
          }}<text class="deduct-credit"> -{{ item.score }}</text></text
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      rulesList: [
        {
          text: "每日登录",
          type: 1,
          score: 1,
        },
        {
          text: "完成学习任务",
          type: 1,
          score: 5,
        },
        {
          text: "观看党建宣传视频",
          type: 1,
          score: 10,
        },
        {
          text: "完成相关考试",
          type: 1,
          score: 10,
        },
        {
          text: "积极参与组织内活动",
          type: 1,
          score: 10,
        },
        {
          text: "三日未登录",
          type: 0,
          score: 3,
        },
        {
          text: "规定时间未完成学习任务",
          type: 0,
          score: 10,
        },
        {
          text: "考试不通过",
          type: 0,
          score: 15,
        },
        {
          text: "参与会议迟到",
          type: 0,
          score: 5,
        },
      ],
    };
  },
  computed: {
    computedAddCreditRules() {
      return this.rulesList.filter((item) => item.type === 1);
    },
    computedDeductCreditRules() {
      return this.rulesList.filter((item) => item.type === 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.credit-rules {
  width: 100%;
  height: 100%;
  .content-title {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    font-wight: 500;
    color: $primary-color;
  }
  .content-list {
    font-size: $base-font;
    .add {
      display: flex;
      flex-direction: column;
      .add-credit {
        margin-left: 20rpx;
        color: $uni-color-success;
      }
    }
    .deduct {
      display: flex;
      flex-direction: column;
      .deduct-credit {
        margin-left: 20rpx;
        color: $uni-color-error;
      }
    }
  }
}
</style>
