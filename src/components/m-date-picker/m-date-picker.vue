<!-- 时间选择器组件 -->

<template>
  <view class="date-picker">
    <view class="start-date">
      <text>开始:</text>
      <text class="select-date" @click="selectDate('start')">{{
        startDate.dateString || "点我选择开始时间"
      }}</text>

      <!-- <u-button @click="showDatePicker">选择时间</u-button> -->
    </view>
    <u-datetime-picker
      :show="show"
      v-model="date"
      mode="datetime"
      :minDate="minDate"
      confirmColor="#ce1126"
      @confirm="confirmDate"
      @cancel="() => show = false"
    ></u-datetime-picker>
    <view class="end-date">
      <text>结束:</text>
      <text class="select-date" @click="selectDate('end')">{{
        endDate.dateString || "点我选择结束时间"
      }}</text>
    </view>
  </view>
</template>

<script>
import { useFormatterDate } from "@/utils/formatterDate";
export default {
  data() {
    return {
      date: Number(new Date()),
      show: false,
      startDate: {
        date: null,
        dateString: null,
      },
      endDate: {
        date: null,
        dateString: null,
      },
      // 点击的是开始时间还是结束时间
      clickDateType: "start",
    };
  },
  computed: {
    // 最小时间：当前时间的10分钟之后
    minDate() {
      return this.startDate.date ? this.startDate.date : new Date().getTime() + 60 * 10 * 1000;
    },
  },
  
  methods: {
    selectDate(type) {
      this.clickDateType = type;
      if (type === "end") {
        // 选择的是结束时间
        if (!this.startDate.date) {
          // 没有选择开始时间
          uni.showToast({
            title: '请先选择开始时间',
            duration: 1500,
            icon: "error"
          })
          return
        }
      }
      this.show = true
    },
    // 选择时间后确认
    confirmDate(data) {
      if (this.clickDateType === "start") {
        this.startDate.dateString = useFormatterDate(data.value);
        this.startDate.date = data.value;
        this.$emit('getStartDate', this.startDate.date)
      }
      if (this.clickDateType === "end") {
        this.endDate.dateString = useFormatterDate(data.value);
        this.endDate.date = data.value;
        this.$emit('getEndDate', this.endDate.date)
      }

      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.date-picker {
  width: 100%;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: $base-font;
  .start-date,
  .end-date {
    // flex: 1;
    display: flex;
    // justify-content: space-around;
    // text-align: center;
    .select-date {
      padding-left: 20rpx;
      color: $primary-color;
    }
  }
  .u-popup {
    flex: 0;
  }
  // .start-date {
  //   display: flex;
  //   // height: 100rpx;
  //   align-items: center;
  //   text {
  //     font-size: $base-font;
  //     flex: 1;
  //   }
  //   .u-popup {
  //     flex: 3;
  //   }
  //   .u-button {
  //     flex: 1;
  //     height: 60rpx;
  //     font-size: $base-font;
  //   }
  // }
}
</style>
