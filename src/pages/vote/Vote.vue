<template>
  <view class="vote">
    <m-list title="投票" :data="voteList">
      <!-- <template v-slot:m-popup="slotProps"> -->
      <!--   <m-popup :show="slotProps.showPopup"></m-popup> -->
      <!-- </template> -->
    </m-list>
    <view class="editor">
      <u-icon name="edit-pen"></u-icon>
      <text class="apply"> 发起投票 </text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      voteList: [
        {
          id: 1,
          title: "2023年第一季度优秀党员评选",
          image: "/static/meet/meet.png",
          desc: "中国共产党已经走过了100年波澜壮阔的光辉历程。100年来，我们党始终坚守为中国人民谋幸福、为中华民族谋复兴的初心和使命，团结带领全国各族人民开辟了伟大道路，建立了伟大功业，铸就了伟大精神，积累了宝贵经验，创造了中华民族发展史、人类社会进步史上令人刮目相看的奇迹",
          status: 2,
          sort: "人物评选",
          startTime: "2023-03-04",
          endTime: "2023-03-11",
        },
        {
          id: 2,
          title: "2022年第四季度优秀党员评选",
          image: "/static/meet/meet.png",
          desc: "中国共产党已经走过了100年波澜壮阔的光辉历程。100年来，我们党始终坚守为中国人民谋幸福、为中华民族谋复兴的初心和使命，团结带领全国各族人民开辟了伟大道路，建立了伟大功业，铸就了伟大精神，积累了宝贵经验，创造了中华民族发展史、人类社会进步史上令人刮目相看的奇迹",
          status: 0,
          sort: "问卷调查",
          startTime: "2022-12-01",
          endTime: "2022-12-08",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.vote {
  width: 100%;
  height: 100%;
  // padding: 20rpx;
  position: relative;

  .editor {
    width: 120rpx;
    height: 120rpx;
    background-color: $primary-color;
    border-radius: 50%;
    position: absolute;
    right: 20rpx;
    bottom: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $white;
    ::v-deep .u-icon__icon {
      span {
        font-size: $large-font !important;
        color: $white;
      }
    }
    .apply {
      font-size: $base-font;
      margin-top: 10rpx;
    }
  }
}
</style>
