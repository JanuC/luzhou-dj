<template>
  <view>
    <u-checkbox-group
      v-model="checkboxValue1"
      placement="column"
      @change="checkboxChange"
    >
      <u-checkbox
        :customStyle="{ marginBottom: '8px' }"
        labelColor="#000"
        activeColor="#ce1126"
        labelSize="12"
        iconSize="12"
        size="14"
        v-for="(value, key) in checkboxData.choose"
        :key="key"
        :label="computeLabel(value, key)"
        :name="key"
      >
      </u-checkbox>
    </u-checkbox-group>
  </view>
</template>
<script>
export default {
  props: ["checkboxData"],
  data() {
    return {
      checkboxValue1: [],
    };
  },
  computed: {
    computeLabel(value, key) {
      return (value, key) => {
        return key + "、" + value;
      };
    },
  },
  methods: {
    checkboxChange(val) {
      this.$emit('getRadioCheckboxValue', { id: this.checkboxData.id, answer: val })
    },
  },
};
</script>

<style lang="scss" scoped>
.u-checkbox-group {
  width: 100%;
  .title {
    margin-bottom: 20rpx;
  }
}
</style>
