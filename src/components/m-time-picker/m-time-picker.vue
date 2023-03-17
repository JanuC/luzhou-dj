<template>
  <view>
    <u-datetime-picker
      :show="data.show"
      v-model="value1"
      :minDate="data.minDate"
      :maxDate="data.maxDate"
      mode="datetime"
      :defaultIndex="['时', '分']"
      :title="data.title"
      confirmColor="#ce1126"
      @cancel="() => data.show = false"
      @confirm="confirmTime"
    ></u-datetime-picker>
  </view>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      value1: Number(new Date()),
    };
  },
  methods: {
    confirmTime(value) {
      // console.log(value)
      if (this.data.type === "start") {
        this.$emit('getStart', value.value)
      }
      if (this.data.type === "end") {
        this.$emit('getEnd', value.value)
      }
      this.data.show = false;
    }
  },
};
</script>
