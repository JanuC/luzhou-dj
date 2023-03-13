<template>
  <view class="container">
    <!-- 搜索框 -->
    <div class="search p-40">
      <u-search
        placeholder="搜索"
        v-model="keyword"
        :show-action="false"
      ></u-search>
    </div>
    <!-- 轮播图 -->
    <carousel />
    <!-- 目录 -->
    <menu-list />
    <!-- 新闻资讯 -->
    <news />
  </view>
</template>

<script>
import carousel from "./components/carousel/Carousel.vue";
import menuList from "./components/menuList/MenuList.vue";
import news from "./components/news/news.vue";
export default {
  components: {
    carousel,
    menuList,
    news,
  },
  data() {
    return {
      keyword: "",
    };
  },
  onLoad() {
    // console.log(123);
  },
  methods: {},
};
</script>

<style>
.search {
  width: 90vw;
}
</style>
