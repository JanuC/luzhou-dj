<template>
  <view class="credit-rank pd-20">
    <m-list-swiper :config="listConfig" @setCurrent="setCurrent">
      <template #time-picker>
        <m-time-select class="time-picker" @getTimeChange="getTimeChange"/>
      </template>
      <template #all>
        <RankInformation :data="rankList" />
      </template>
      <template #party>
        <RankInformation :data="rankList1" />
      </template>
    </m-list-swiper>
  </view>
</template>

<script>
import RankInformation from "./components/RankInformation.vue";
export default {
  components: {
    RankInformation,
  },
  data() {
    return {
      // 传递给list 的配置
      listConfig: {
        current: 0,
        navbarList: [
          {
            value: "all",
            text: "所有人排名",
          },
          {
            value: "party",
            text: "党员排名",
          },
        ],
        title: "列表",
        noData: false,
        isSubsectionDisable: false,
      },
      rankList: [
        {
          id: 1,
          avatar: "https://cdn.uviewui.com/uview/album/1.jpg",
          name: "张三",
          score: 180,
          organize: "中国红十字会",
        },
        {
          id: 2,
          avatar: "https://cdn.uviewui.com/uview/album/1.jpg",
          name: "李四",
          score: 172,
          organize: "中国共产党",
        },
        {
          id: 3,
          avatar: "https://cdn.uviewui.com/uview/album/1.jpg",
          name: "王五",
          score: 163,
          organize: "中国红十字会",
        },
        {
          id: 4,
          avatar: "https://cdn.uviewui.com/uview/album/1.jpg",
          name: "赵六",
          score: 150,
          organize: "中国红十字会",
        },
        {
          id: 5,
          avatar: "https://cdn.uviewui.com/uview/album/1.jpg",
          name: "何七",
          score: 142,
          organize: "中国红十字会",
        },
        {
          id: 6,
          avatar: "https://cdn.uviewui.com/uview/album/1.jpg",
          name: "刘麻子",
          score: 121,
          organize: "中国红十字会",
        },
        {
          id: 7,
          avatar: "https://cdn.uviewui.com/uview/album/1.jpg",
          name: "铁拐李",
          score: 111,
          organize: "中国红十字会",
        },
      ],
      rankList1: [
        {
          id: 4,
          avatar: "https://cdn.uviewui.com/uview/album/1.jpg",
          name: "赵六",
          score: 150,
          organize: "中国红十字会",
        },
        {
          id: 5,
          avatar: "https://cdn.uviewui.com/uview/album/1.jpg",
          name: "何七",
          score: 142,
          organize: "中国红十字会",
        },
        {
          id: 6,
          avatar: "https://cdn.uviewui.com/uview/album/1.jpg",
          name: "刘麻子",
          score: 121,
          organize: "中国红十字会",
        },
        {
          id: 7,
          avatar: "https://cdn.uviewui.com/uview/album/1.jpg",
          name: "铁拐李",
          score: 111,
          organize: "中国红十字会",
        },
      ],
    };
  },
  methods: {
    setCurrent(val) {
      this.listConfig.current = val;
    },
    getTimeChange(val) {
      console.log(val)
    }
  },
};
</script>

<style lang="scss" scoped>
.credit-rank {
  width: 100%;
  height: 100%;
  font-size: $base-font;
  .time-picker {
    margin-top: 20rpx;
  }
}
</style>
