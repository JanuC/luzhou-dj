<template>
  <view>
    <u-subsection
      :list="list"
      :current="current"
      @change="changeTab"
    ></u-subsection>
    <AllMeetings v-if="current === 0" />
    <MyMeetings v-else />
  </view>
</template>

<script>
import AllMeetings from "./components/AllMeetings.vue";
import MyMeetings from "./components/MyMeetings.vue";
export default {
  components: {
    AllMeetings,
    MyMeetings,
  },
  data() {
    return {
      list: ["所有会议", "我参加的"],
      // 或者如下，也可以配置keyName参数修改对象键名
      // list: [{name: '未付款'}, {name: '待评价'}, {name: '已付款'}],
      current: 0,
    };
  },
  methods: {
    // 切换 tab 显示对应的内容
    changeTab(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="scss" scoped></style>
