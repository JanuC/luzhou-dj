<template>
  <view class="step">
    <u-steps current="-1" inactiveColor="#ce1126" direction="column">
      <u-steps-item
        v-for="(item, index) in agendaList"
        :key="index"
        :title="item.title"
        :desc="item.time"
      >
      </u-steps-item>
    </u-steps>
    <u-button @click="addAgenda">
      <!-- <u-icon name="plus"></u-icon> -->
      添加议程
    </u-button>
    <u-popup :round="10" :show="isPopupShow" mode="center">
      <u-form
        class="agenda-popup"
        :model="agendaForm"
        ref="uForm"
        labelPosition="top"
      >
        <u-form-item label="议程标题:" prop="title">
          <u-input v-model="agendaForm.title"></u-input>
        </u-form-item>
        <u-form-item label="议程时间:" prop="time">
          <!-- <u-input></u-input> -->
          <view class="time">
            <view class="start">
              <text>开始:</text>
              <text class="select-time" @click="selectTime('start')">{{
                agendaStart || "点我选择开始时间"
              }}</text>
            </view>
            <view class="time-picker">
              <m-time-picker
                :data="timePickerData"
                @getStart="getStart"
                @getEnd="getEnd"
              />
            </view>
            <view class="end">
              <text>结束:</text>
              <text class="select-time" @click="selectTime('end')">{{
                agendaEnd || "点我选择结束时间"
              }}</text>
            </view>
          </view>
        </u-form-item>
        <u-form-item class="button-box">
          <u-button @click="confirmAddAgenda">添加</u-button>
          <u-button @click="() => (isPopupShow = false)">取消</u-button>
        </u-form-item>
      </u-form>
    </u-popup>
  </view>
</template>

<script>
import { useFormatterDate } from "@/utils/formatterDate";
export default {
  props: ["date"],
  data() {
    return {
      // 会议议程列表
      agendaList: [],
      // popup 的显示和隐藏
      isPopupShow: false,
      // 每个会议议程的表单数据
      agendaForm: {
        title: "",
        time: "",
        startDate: null,
        endDate: null,
      },
      // 会议议程表单数据校验规则
      rules: {
        title: [
          {
            required: true,
            message: "请输入议程标题",
            trigger: ["change", "blur"],
          },
        ],
        time: [
          {
            validator: (rule, value, callback) => {
              console.log("value", value);
              return this.agendaStart && this.agendaEnd;
            },
            message: "请选择该议程时间",
            trigger: ["change", "blur"],
          },
        ],
      },
      // 传递给时间选择器的数据
      timePickerData: {
        show: false,
        minDate: null,
        maxDate: null,
        title: "",
        type: "",
      },
      // 存储每次会议议程选择的时间
      agendaStart: null,
      agendaEnd: null,
    };
  },
  updated() {
    this.$refs.uForm.setRules(this.rules);
  },
  methods: {
    // 添加议程
    addAgenda() {
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
    selectTime(type) {
      this.timePickerData.type = type;
      if (type === "start") {
        this.timePickerData.show = true;
        this.timePickerData.title = "请选择开始时间";
        let len = this.agendaList.length;
        this.timePickerData.minDate = len
          ? this.agendaList[len - 1].endDate
          : this.date.startDate;
        this.timePickerData.maxDate = this.date.endDate;
      }
      if (type === "end") {
        this.timePickerData.show = true;
        this.timePickerData.title = "请选择结束时间";
        // 结束的时间应该在开始时间到会议最后的时间之间
        this.timePickerData.minDate = this.agendaForm.startDate || this.date.startDate 
      }
    },
    getStart(value) {
      this.agendaStart = useFormatterDate(value);
      this.agendaForm.startDate = value;
    },
    getEnd(value) {
      this.agendaEnd = useFormatterDate(value);
      this.agendaForm.endDate = value;
    },
    // 确认添加议程
    confirmAddAgenda() {
      this.agendaForm.time = this.agendaStart + " 至 " + this.agendaEnd;
      this.$refs.uForm.validate().then((value) => {
        if (value) {
          // 校验成功
          this.agendaList.push({...this.agendaForm});
          this.$refs.uForm.resetFields();
          this.agendaStart = this.agendaEnd = null;
          // console.log(this.agendaList);
          this.isPopupShow = false;
        }
      });
     

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
    ::v-deep .u-form-item {
      .u-form-item__body__right__message {
        margin-left: 20rpx !important;
      }
    }
    ::v-deep .u-form-item__body__right__content__slot {
      display: flex;
      justify-content: space-between !important;
      .time {
        width: 100%;
        // background-color: red;
        display: flex;
        flex-direction: column;
        .start,
        .end {
          flex: 1;
          // text-align: center;
          font-size: $base-font;
          margin: 20rpx 0;
          .select-time {
            margin-left: 20rpx;
            color: $primary-color;
            font-size: $base-font;
          }
        }
      }
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
