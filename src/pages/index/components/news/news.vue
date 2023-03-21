<template>
  <view class="news p-40">
    <view class="news-title">
      <text class="title">新闻资讯</text>
      <text class="more" @click="jumpToNews">查看更多</text>
    </view>
    <view class="news-content">
      <view
        class="news-content-item"
        v-for="item in newsList"
        :key="item.id"
        @click="clickOneNew(item.id)"
      >
        <view class="item-left">
          <text class="item-title">{{ item.title }}</text>
          <text class="item-time"> {{ item.write_time }}</text>
        </view>
        <view class="item-right">
          <image :src="item.image"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getNews } from "@/http/apis/news";
export default {
  data() {
    return {
      newsList: [],
    };
  },
  async mounted() {
    this.newsList = await getNews();
  },
  methods: {
    clickOneNew(id) {
      uni.navigateTo({
        url: `/pages/newsContext/NewsContext?id=${id}`,
      });
    },
    jumpToNews() {
      uni.switchTab({
        url: '/pages/news/News'
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.news {
  &-title {
    .title {
      font-weight: 700;
    }
    .more {
      float: right;
      color: $light-color;
    }
  }
  &-content {
    margin-top: 20rpx;
    // text {
    //   display: block;
    //   padding: 10rpx 0;
    // }
    &-item {
      width: 100%;
      height: 200rpx;
      // background-color: #ccc;
      display: flex;
      &:first-child {
        border-top: 1rpx solid $light-color;
      }
      border-bottom: 1rpx solid $light-color;
      padding: 20rpx;
      .item-left {
        flex: 5;
        // background-color: antiquewhite;
        display: flex;
        flex-direction: column;
        padding-right: 10rpx;
        .item-title {
          flex: 3;
          // background-color: aqua;
          font-size: 30rpx;
          font-weight: 700;
        }
        .item-time {
          flex: 1;
          text-align: right;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          color: $light-color;
        }
      }
      .item-right {
        flex: 3;
        image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
