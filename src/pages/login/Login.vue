<template>
  <view class="login">
    <view class="icon">
      <image src="/static/R.png" />
    </view>
    <Form />
  </view>
</template>

<script>
import Form from "../../components/form/Form.vue";
export default {
  components: {
    Form,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.login {
  // height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50rpx;
  .icon {
    width: 200rpx;
    height: 200rpx;
    margin: 50rpx 0;
    image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
