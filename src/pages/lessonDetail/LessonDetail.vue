<template>
  <!-- <view class="lesson-detail"> -->
  <!--   课程详情 -->
  <!-- </view> -->
  <m-lesson :data="lessonData"></m-lesson>
</template>

<script>
export default {
  data() {
    return {
      lessonData: {
        title: "习近平关于全面从严治党论述摘编",
        introduce:
          "党的十八大以来，以习近平同志为核心的党中央坚定推进全面从严治党，党内政治生活展现新气象，赢得了党心民心，为开创党和国家事业新局面提供了重要保证。习近平同志围绕全面从严治党发表的一系列重要论述，对于我们深刻认识全面从严治党的重大意义，准确把握全面从严治党的基本要求和重点任务，牢固树立政治意识、大局意识、核心意识、看齐意识，坚定不移维护党中央权威和党中央集中统一领导，继续推进全面从严治党，确保党团结带领人民不断开创中国特色社会主义事业新局面，具有十分重要的意义。本书内容，摘自习近平同志二〇一二年十一月十五日至二〇一六年十月二十七日期间的讲话、文章等八十多篇重要文献，分十个专题，共计三百七十一段重要论述。其中许多论述是第一次公开发表。",
        learnedPersonCount: 10,
        // 课程状态：0: 未添加 1: 添加但未开始学 2: 添加但未学习完 3: 已学习完
        lessonStatus: 2,
        directoryList: [
          {
            title:
              "第一章 全面从严治党，确保党始终成为中国特色社会主义事业的坚强领导核心",
            time: "10分钟",
            status: 1,
          },
          {
            title:
              "第二章 党要管党首先要从党内政治生活管起，从严治党首先要从党内政治生活严起 ",
            time: "8分钟",
            status: 1,
          },
          {
            title: "第三章 坚定理想信念，补足精神之钙",
            time: "18分钟",
            status: 0,
          },
          {
            title: "第四章 牢固树立“四个意识”，坚决维护党中央权威",
            time: "23分钟",
            status: 0,
          },
        ],
      },
    };
  },
  onLoad(options) {
    console.log(options);
  },
};
</script>

<style lang="scss" scoped></style>
