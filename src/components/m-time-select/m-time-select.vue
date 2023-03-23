<template>
  <view class="time-picker">
    <view class="select-box" @click="() => showTimePicker = true">
      <text>{{ computedTimeValue }}</text>
      <u-icon name="arrow-down-fill" color="$primary-color"></u-icon>
    </view>
    <u-datetime-picker
      :show="showTimePicker"
      v-model="timePickerValue"
      mode="year-month"
      :maxDate="new Date().getTime() - 30 * 24 * 60 * 60 * 1000"
      confirmColor="#ce1126"
      @cancel="() => (showTimePicker = false)"
      @confirm="confirmTime"
    ></u-datetime-picker>
    <view class="toggle-time" @click="toggleTimeType">
      <text :class="{ 'primary-color': timeType === 'month' }">月</text>
      <image src="/static/study/toggle.png"></image>
      <text :class="{ 'primary-color': timeType === 'year' }">年</text>
    </view>
  </view>
</template>

<script>
export default {
  props: ["config"],
  data() {
    return {
      // 是否展示时间拾取器
      showTimePicker: false,
      // 时间拾取器的值
      timePickerValue: Number(new Date())  - 30 * 24 * 60 * 60 * 1000,
      // 时间拾取器的 类型: month / year
      timeType: "month",
    };
  },
  updated() {
    // 由于 uview datetimePicker 没有只选择年份的选项，通过 js 的方式移除月份的选项
    if (this.showTimePicker && this.timeType === "year") {
      let el = document.querySelector(".uni-picker-view-wrapper");
      if (el.children.length >= 2) {
        el.removeChild(el.lastElementChild);
      }
    }
  },
  computed: {
    // computeTimeType() {
    //   return () => {
    //     if (this.timeType === "year") {
    //       return {
    //         type: "",
    //       };
    //     }
    //   };
    // },
    computedTimeValue() {
      let value;
      const date = new Date(this.timePickerValue);
      let Y = date.getFullYear();
      if (this.timeType === "month") {
        let M = date.getMonth() + 1;
        M = M >= 10 ? M : "0" + M;
        value = `${Y}年${M}月`;
      }
      if (this.timeType === "year") {
        value = `${Y}全年`
      }
      return value;
    },
  },
  methods: {
    confirmTime(val) {
      this.showTimePicker = false;
      this.$emit('getTimeChange', val)
    },
    toggleTimeType() {
      if (this.timeType === "month") {
        this.timeType = "year";
        return;
      }
      if (this.timeType === "year") {
        this.timeType = "month";
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.time-picker {
  width: 100%;
  display: flex;
  font-size: $base-font;
  font-weight: 700;
  .select-box {
    color: $primary-color;
    display: flex;
    align-items: center;
    border: 1px solid $primary-color;
    padding: 4rpx 10rpx;
    border-radius: 20rpx;
    .u-icon {
      margin-left: 10rpx;
    }
  }
  .toggle-time {
    display: flex;
    align-items: center;
    image {
      width: 40rpx;
      height: 40rpx;
      margin: 0 10rpx;
    }
  }
}
.primary-color {
  color: $primary-color;
}
</style>
