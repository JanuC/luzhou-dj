<template>
  <view class="list"
    ><u-subsection
      :list="navBarList"
      activeColor="#ce1126"
      mode="subsection"
      :current="current"
      @change="changeCurrent"
    ></u-subsection>
    <slot name="time-picker"></slot>
    <m-empty v-if="config.noData" :title="emptyData" />
    <view v-else class="list-data">
      <swiper class="swiper" :current="current" @change="changeCurrent">
        <swiper-item v-for="(item, index) in config.navbarList" :key="index">
          <slot :name="item.value"></slot>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
export default {
  props: ["config", "title"],
  data() {
    return {
      current: 0,
    };
  },
  beforeMount() {
    this.current = this.config.current;
  },
  computed: {
    emptyData() {
      const { title, navbarList, current } = this.config;
      return navbarList[current].text + title + "为空";
    },
    navBarList() {
      return this.config.navbarList.map((item) => item["text"]);
    },
  },
  methods: {
    changeCurrent(val) {
      if (typeof val === "object") {
        this.current = val.detail.current;
        this.$emit("setCurrent", this.current);
        return;
      }
      this.current = val;
      this.$emit("setCurrent", this.current);
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  height: 100%;
  .u-subsection {
    margin-bottom: 20rpx;
  }
  .list-data {
    margin-top: 20rpx;
    height: calc(100% - 46px - 22.5px);
    .swiper {
      height: 100%;
      overflow-y: scroll;
    }
    uni-swiper-item {
      overflow-y: scroll;
    }
  }
}

// .list-data {
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   padding: 20rpx;
//   .uni-margin-wrap {
//     flex: 1;
//     .swiper {
//       height: 100%;
//     }
//     uni-swiper-item {
//       overflow-y: scroll;
//     }
//   }
// }
</style>
