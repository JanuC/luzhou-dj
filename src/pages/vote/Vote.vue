<template>
  <view class="vote">
    <m-empty v-if="!voteList.length" title="投票列表为空" />
    <view v-else class="vote-list">
      <view
        class="vote-list-item box-shadow"
        v-for="item in voteList"
        :key="item.id"
      >
        <view class="item-left">
          <image :src="item.image"></image>
        </view>
        <view class="item-right">
          <view class="title text-nowrap">{{ item.title }}</view>
          <view class="desc">{{ item.desc }}</view>
          <view class="time"
            >投票时间: {{ item.startTime }} 至 {{ item.endTime }}</view
          >
          <view class="bottom">
            <view class="status" :class="filterStatus(item.status).class">{{
              filterStatus(item.status).text
            }}</view>
            <view class="btn">查看详情</view>
          </view>
        </view>
      </view>
    </view>
    <view class="editor">
      <u-icon name="edit-pen"></u-icon>
      <text class="apply"> 发起投票 </text>
    </view>
  </view>
</template>

<script>
import { filterStatus } from "../../utils/filterStatus";

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
          startTime: "2023-03-04",
          endTime: "2023-03-11",
        },
        {
          id: 2,
          title: "2022年第四季度优秀党员评选",
          image: "/static/meet/meet.png",
          desc: "中国共产党已经走过了100年波澜壮阔的光辉历程。100年来，我们党始终坚守为中国人民谋幸福、为中华民族谋复兴的初心和使命，团结带领全国各族人民开辟了伟大道路，建立了伟大功业，铸就了伟大精神，积累了宝贵经验，创造了中华民族发展史、人类社会进步史上令人刮目相看的奇迹",
          status: 0,
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
  padding: 20rpx;
  position: relative;
  &-list {
    height: 100%;
    overflow-y: scroll;
    &-item {
      width: 100%;
      height: 240rpx;
      background-color: $white;
      border-radius: 20rpx;
      overflow: hidden;
      padding: 20rpx;
      display: flex;
      margin-bottom: 20rpx;
      .item-left {
        width: 240rpx;
        border-radius: 10rpx;
        overflow: hidden;
        image {
          width: 100%;
          height: 100%;
        }
      }
      .item-right {
        flex: 1;
        width: calc(100% - 240rpx);
        margin-left: 20rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .desc {
          // flex: 3;
          overflow: hidden;
          font-size: $base-font;
          text-overflow: ellipsis;
          word-break: break-all;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .title {
          font-weight: 700;
        }
        .time {
          // text-align:right;
          font-size: $base-font;
        }
        .bottom {
          text-align: right;
          display: flex;
          justify-content: space-between;
          font-size: $base-font;
          .btn {
            color: $primary-color;
          }
        }
      }
    }
  }
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
