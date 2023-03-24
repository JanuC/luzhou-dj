<template>
  <view>
    <u-modal
      :show="config.isModalShow"
      :title="config.title"
      :content="config.content"
      confirmColor="#ce1126"
      @confirm="confirm"
    ></u-modal>
  </view>
</template>

<script>
export default {
  props: ["config"],
  data() {
    return {};
  },
  methods: {
    confirm() {
      this.$emit('closeModal')
    },
  },
};
</script>

<style lang="scss" scoped></style>
