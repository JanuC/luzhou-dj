<template>
  <u-empty :text="title" icon="http://cdn.uviewui.com/uview/empty/data.png">
  </u-empty>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      voteList: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.vote {
  padding: 20rpx;
}
</style>
