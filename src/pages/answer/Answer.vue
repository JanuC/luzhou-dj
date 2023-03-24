<template>
  <view class="answer">
    <m-modal :config="modalConfig" @closeModal="closeModal" />
    <view class="question-list">
      <view class="question-list-item">

      </view>
    </view>
    <u-button v-show="!modalConfig.isModalShow">提交答案</u-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      modalConfig: {
        isModalShow: false,
        title: "考试规则",
        content: "从题库中随机抽取十道题，每道题10分，共100分，在15分钟内达到60分及格"
      },
      questionList: []
    }
  },
  methods: {
    closeModal() {
      this.modalConfig.isModalShow = false;

    }
  },
}
</script>

<style lang="scss" scoped>
  .answer {
    padding: 20rpx;
    height: 100%;
    display: flex;
    flex-direction: column;
    .question-list {
      flex: 1;
    }
    .u-button {
      background-color: $primary-color;
      border-color: $primary-color;
      color: $white;
    }
  }
</style>
