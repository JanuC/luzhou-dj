<template>
  <!-- 我 -->
  <view class="user"> 用户 </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {
    if (!localStorage.getItem("token")) {
      uni.navigateTo({
        url: "/pages/login/Login",
      });
    }
  },
};
</script>

<style></style>
