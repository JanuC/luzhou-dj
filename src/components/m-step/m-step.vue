<template>
  <view class="step">
    <u-steps current="-1" inactiveColor="#ce1126" direction="column">
      <u-steps-item
        v-for="(item, index) in agendaList"
        :key="index"
        :title="item.title"
        :desc="item.desc"
      >
      </u-steps-item>
    </u-steps>
    <u-button @click="addAgenda">
      <u-icon name="plus"></u-icon>
    </u-button>
    <u-popup :round="10" :show="isPopupShow" mode="center">
      <u-form
        class="agenda-popup"
        :model="agendaForm"
        ref="uForm"
        labelPosition="top"
      >
        <u-form-item label="议程标题:">
          <u-input></u-input>
        </u-form-item>
        <u-form-item label="议程时间:">
          <u-input></u-input>
        </u-form-item>
        <u-form-item class="button-box">
          <u-button>确认</u-button>
          <u-button>取消</u-button>
        </u-form-item>
      </u-form>
    </u-popup>
  </view>
</template>

<script>
export default {
  props: ["date"],
  data() {
    return {
      agendaList: [
        {
          title: "会议签到",
          desc: "09:00 - 09:10",
        },
        {
          title: "开始会议",
          desc: "09:10 - 11:00",
        },
        {
          title: "结束会议",
          desc: "11:00",
        },
      ],
      isPopupShow: false,
      agendaForm: {
        title: "",
        time: "",
      },
    };
  },
  methods: {
    // 添加议程
    addAgenda() {
      console.log(this.date);
      // this.$refs.inputDialog.open()
      // 如果会议时间没有选择，提示用户
      if (!this.date.startDate || !this.date.endDate) {
        uni.showToast({
          title: "请先选择会议时间",
          duration: 1500,
          icon: "error",
        });
        return;
      }
      // 弹出 popup，让用户输入相关信息
      this.isPopupShow = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.step {
  width: 100%;
  .u-steps {
    display: felx;
    flex-direction: column;
    // margin: 0 auto;
    // align-items: center;
    ::v-deep .u-steps-item > .u-steps-item__wrapper {
      background: $base-bg;
    }
  }
  .agenda-popup {
    width: 520rpx;
    padding: 20rpx;
    ::v-deep .u-form-item__body__right__content__slot {
      display: flex;
      justify-content: space-between !important;
      .u-button {
        margin: 0;
        width: 45%;
        &:first-child {
          background-color: $primary-color;
          border-color: $primary-color;
          color: $white;
        }
      }
    }
  }
}
</style>
