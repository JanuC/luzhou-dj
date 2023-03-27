<template>
  <u-radio-group placement="column">
    <u-radio
      :customStyle="{ marginBottom: '8px' }"
      labelColor="#000"
      activeColor="#ce1126"
      size="14"
      labelSize="12"
      v-for="(value, key) in radioData.choose"
      :key="key"
      :label="computeLabel(value, key)"
      :name="key"
      @change="radioChange"
    >
    </u-radio>
  </u-radio-group>
</template>

<script>
export default {
  props: ["radioData"],
  data() {
    return {};
  },
  computed: {
    computeLabel(value, key) {
      return (value, key) => {
        return key + "、" + value;
      };
    },
  },
  methods: {
    radioChange(val) {
      this.$emit("getRadioCheckboxValue", {
        id: this.radioData.id,
        answer: [val],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.u-radio-group {
  width: 100%;
  .title {
    margin-bottom: 20rpx;
  }
}
</style>
