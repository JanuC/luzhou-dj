<template>
  <view class="answer">
    <m-modal :config="modalConfig" @closeModal="closeModal" />
    <view class="question-list">
      <!-- <view class="question-list-item"> -->
      <!--   <m-radio-slot /> -->
      <!--   <m-checkbox-slot /> -->
      <!-- </view> -->
      <m-form-answer :formData="questionList" />
    </view>
    <!-- <u-button v-show="!modalConfig.isModalShow">提交答案</u-button> -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      modalConfig: {
        isModalShow: false,
        title: "考试规则",
        content:
          "从题库中随机抽取十道题，每道题10分，共100分，在15分钟内达到60分及格",
      },
      questionList: [
        {
          id: 1,
          type: "single",
          title:
            "党的基层委员会、总支部委员会、支部委员会的书记、副书记选举产生后，应报（）批准。",
          choose: {
            A: "上级党委",
            B: "上级组织部门",
            C: "上级党组织",
            D: "上级党组织书记",
          },
        },
        {
          id: 2,
          type: "multiple",
          title:
            "党的基层组织基本任务之一是对党员进行教育、管理、监督和服务，提高党员素质，坚定理想信念，增强党性，（），保障党员的权利不受侵犯。",
          choose: {
            A: "严格党的组织生活",
            B: "开展批评和自我批评",
            C: "维护和执行党的纪律",
            D: "监督党员切实履行义务",
          },
        },
        {
          id: 3,
          type: "single",
          title: "党的基层委员会、总支部委员会、支部委员会每届任期（）。",
          choose: {
            A: "三年至五年",
            B: "两年或三年",
            C: "两年至三年",
            D: "三年或五年"
          }
        },
        {
          id: 4,
          type: "multiple",
          title: "某社区党组织书记为达到长期担任该职务的目的，在社区内长期不发展党员，并对年轻有为的入党积极分子进行压制，导致该社区党员平均年龄偏大、战斗力不强。此做法违反了《党章》的哪些要求？（）",
          choose: {
            A: "对要求入党的积极分子进行教育和培养",
            B: "做好经常性的发展党员工作",
            C: "保障党员的权利不受侵犯",
            D: "重视在生产、工作第一线和青年中发展党员"
          }
        },
        {
          id: 5,
          type: "multiple",
          title: "以下属于党的全国代表大会的职权的是（）。",
          choose: {
            A: "听取和审查中央委员会的报告",
            B: "讨论并决定党的重大问题",
            C: "修改党的章程",
            D: "修订中华人民共和国宪法"
          }
        },
        {
          id: 6,
          type: "single",
          title: "党的地方各级委员会全体会议，每年至少召开（）次。",
          choose: {
            A: "一",
            B: "两",
            C: "三",
            D: "四"
          }
        }
      ],
    };
  },
  methods: {
    closeModal() {
      this.modalConfig.isModalShow = false;
    },
  },
};
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
}
</style>
