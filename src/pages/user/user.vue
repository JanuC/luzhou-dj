<template>
  <!-- 我 -->
  <view class="user">
    <view class="notLogin" v-if="!isLogin"
      >未登录，请先<text @click="goToLogin">登录</text></view
    >
  </view>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
    };
  },
  methods: {
    goToLogin() {
      uni.navigateTo({
        url: "/pages/login/Login",
      });
    },
  },
  onLoad() {},
  onShow() {
    if (!localStorage.getItem("token")) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.user {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .notLogin {
    text {
      color: $primary-color;
    }
  }
}
</style>
