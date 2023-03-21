<template>
  <view class="m-popup">
    <u-popup
      :show="show"
      mode="center"
      :round="10"
      :closeable="true"
      @close="closePopup"
    >
      <view class="popup-content">
        <text class="title mb-20">{{ data.title }}</text>
        <view class="image mb-20">
          <image :src="data.image"></image>
        </view>
        <text class="desc mb-20">{{ data.desc }}</text>
        <text class="srot mb-20">分类: {{ data.sort }}</text>
        <text class="time mb-20"
          >时间: {{ data.startTime }} 至 {{ data.endTime }}</text
        >
        <VoteList />
      </view>
    </u-popup>
  </view>
</template>

<script>
import VoteList from '@/pages/vote/components/VoteList.vue'
export default {
  props: ["show", "data"],
  components: {
    VoteList
  },
  methods: {
    closePopup() {
      this.$emit("closePopup", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-content {
  width: 80vw;
  max-height: 80vh;
  padding: 20rpx;
  display: flex;
  flex-direction: column;
  font-size: $base-font;
  
  .title {
    width: 88%;
    font-weight: 700;
    font-size: $medium-font;
  }
  .image {
    border-radius: 20rpx;
    overflow: hidden;
    height: 300rpx;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .desc {
    font-size: $base-font;
  }
  .content {
    flex: 1;
  }
}
</style>
