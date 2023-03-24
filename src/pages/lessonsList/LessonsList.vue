<template>
  <view class="lessons-list">
    <view class="title">{{ type }}</view>
    <view class="list">
      <view class="list-item box-shadow" v-for="(item, index) in new Array(10).fill(this.mookData)" :key="index" @click=showLessonInfo(item.id)>
        <view class="item-left">
          <image :src="item.image"></image>
        </view>
        <view class="item-right">
          <view class="lessons-title">{{ item.title }}</view>
          <view class="lessons-desc double-line">{{ item.desc }}</view>
          <view class="lessons-time">学习时间: {{ item.time }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      type: "",
      mookData: {
        id: 1,
        title: "习近平关于全面从严治党论述摘篇",
        desc: "党的十八大以来，以习近平同志为核心的党中央坚定推进全面从严治党，党内政治生活展现新气象，赢得了党心民心，为开创党和国家事业新局面提供了重要保证。习近平同志围绕全面从严治党发表的一系列重要论述，对于我们深刻认识全面从严治党的重大意义，准确把握全面从严治党的基本要求和重点任务，牢固树立政治意识、大局意识、核心意识、看齐意识，坚定不移维护党中央权威和党中央集中统一领导，继续推进全面从严治党，确保党团结带领人民不断开创中国特色社会主义事业新局面，具有十分重要的意义。本书内容，摘自习近平同志二〇一二年十一月十五日至二〇一六年十月二十七日期间的讲话、文章等八十多篇重要文献，分十个专题，共计三百七十一段重要论述。其中许多论述是第一次公开发表。",
        time: "1小时20分钟",
        image: "/static/study/video.jpeg"
      }
    };
  },
  onLoad(options) {
    this.type = options.type;
  },
  methods: {
    showLessonInfo(id) {
      uni.navigateTo({
        url: `/pages/lessonDetail/LessonDetail?id=${id}`
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.lessons-list {
  padding: 20rpx;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .title {
    font-size: $normal-font;
    font-weight: 700;
    color: $white;
    background: $primary-color;
    border-radius: 20rpx;
    text-align: center;
  }
  .list {
    flex: 1;
    // margin-top: 20rpx;
    padding: 10rpx; 
    overflow-y: scroll;
    &-item {
      display: flex;
      padding: 20rpx;
      border-bottom: 1px solid $whiteness-color;
      background: $white;
      border-radius: 20rpx;
      margin-bottom: 20rpx;
      .item-left {
        width: 200rpx;
        height: 160rpx;
        background: pink;
        border-radius: 20rpx;
        overflow: hidden;
        image {
          width: 100%;
          height: 100%;
        }
      }
      .item-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 20rpx;
        .lessons-title {
          font-size: $normal-font;
          color: $primary-color;
        }
        .lessons-desc {
          flex: 1;
          max-height: 66rpx;
          font-size: $base-font;
        }
        .lessons-time {
          font-size: $base-font;
          color: $light-color;
        }
      }
    }
  }
}
</style>
