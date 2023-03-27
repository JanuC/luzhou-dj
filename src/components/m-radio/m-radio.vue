<template>
  <u-radio-group v-model="radioValue" placement="colum" @change="groupChange">
    <u-radio
      activeColor="#ce1126"
      labelSize="12"
      size="12"
      v-for="(item, index) in list"
      :key="index"
      :label="item.name"
      :name="item.name"
    >
    </u-radio>
  </u-radio-group>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      radioValue: this.list[0].name,
    };
  },
  mounted() {
    this.$emit("getRadioValue", this.radioValue);
  },
  methods: {
    groupChange(value) {
      // console.log(value);
      this.radioValue = value;
      this.$emit("getRadioValue", this.radioValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.u-radio-group {
  width: 100%;
  display: felx;
  flex-wrap: wrap;
  .u-radio {
    flex: 1;
    padding: 20rpx 0;
  }
}
</style>
