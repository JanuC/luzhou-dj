<template>
  <view class="m-list">
    <m-empty v-if="!data.length" :title="emptyData" />
    <view class="list" v-else>
      <view
        class="list-item box-shadow"
        v-for="item in data"
        :key="item.id"
        @click="showItemInfo(item)"
      >
        <view class="item-left">
          <image src="/static/meet/meet.png"></image>
        </view>
        <view class="item-right">
          <view class="title text-nowrap">{{ item.title }}</view>
          <view class="desc">{{ item.desc }}</view>
          <view class="time">
            {{ title }}时间: {{ item.startTime }} 至 {{ item.endTime }}
          </view>
          <view class="info">
            <view class="sort">分类: {{ item.sort }}</view>
            <view class="status" :class="filterStatus(item.status).class">{{
              filterStatus(item.status).text
            }}</view>
          </view>
        </view>
      </view>
    </view>
    <!-- <slot name="m-popup" :showPopup="showPopup" @closePopup="closePopup"></slot> -->
    <m-popup :show="showPopup" :data="popupData" @closePopup="closePopup">
    </m-popup>
  </view>
</template>

<script>
import { filterStatus } from "../../utils/filterStatus";

export default {
  props: ["title", "data"],
  data() {
    return {
      showPopup: false,
      popupData: [],
    };
  },
  
  computed: {
    emptyData() {
      return this.title + "列表为空";
    },
  },
  methods: {
    showItemInfo(item) {
      // 展示 popup
      this.showPopup = true;
      // 传递数据
      this.popupData = item;
    },
    closePopup(val) {
      this.showPopup = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.m-list {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 20rpx;
  .list {
    &-item {
      background-color: $white;
      height: 240rpx;
      border-radius: 20rpx;
      display: flex;
      padding: 20rpx;
      margin-bottom: 20rpx;
      .item-left {
        width: 240rpx;
        border-radius: 20rpx;
        overflow: hidden;
        image {
          width: 100%;
          height: 100%;
        }
      }
      .item-right {
        flex: 1;
        margin-left: 10rpx;
        width: calc(100% - 240rpx);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: $base-font;
        .title {
          font-size: $medium-font;
          font-weight: 700;
        }
        .desc {
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .info {
          display: flex;
          justify-content: space-between;
          .btn {
            color: $primary-color;
          }
        }
      }
    }
  }
}
</style>
