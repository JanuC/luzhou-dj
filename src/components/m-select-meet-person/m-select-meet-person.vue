<template>
  <view class="select-person">
    <u-button @click="() => (isPopupShow = true)">选择参会人员</u-button>
    <u-popup :show="isPopupShow" mode="center" :round="10">
      <view class="person-popup">
        <view class="top-icon">
          <text class="select-text">全选</text>
          <u-switch
            v-model="isSelectAll"
            activeColor="#ce1126"
            size="14"
            @change="selectAll"
          ></u-switch>
        </view>
        <view class="list">
          <view
            class="list-item"
            v-for="item in allPersonList"
            :key="item.id"
            @click="clickPersonItem(item)"
          >
            <view class="avatar">
              <u-avatar :size="30" :src="item.url" shape="square"></u-avatar>
            </view>
            <view class="nickname">名字-{{ item.id }}</view>
            <view
              class="select-icon"
              v-if="selectPersonList.some((person) => person.id === item.id)"
            >
              <u-icon name="checkbox-mark" color="#ce1126"></u-icon>
            </view>
          </view>
        </view>
        <view class="bottom-icon">
          <text @click="() => (isPopupShow = false)">取消</text>
          <text class="total"
            >已选择: {{ selectPersonList.length }}人 / 共: {{ allPersonList.length }}人</text
          >
          <text class="confirm-icon" @click="confirmSelect">确认</text>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isPopupShow: false,
      isSelectAll: false,
      allPersonList: [
        {
          id: 1,
          url: "https://cdn.uviewui.com/uview/album/1.jpg",
        },
        {
          id: 2,
          url: "https://cdn.uviewui.com/uview/album/1.jpg",
        },
        {
          id: 3,
          url: "https://cdn.uviewui.com/uview/album/1.jpg",
        },
        {
          id: 4,
          url: "https://cdn.uviewui.com/uview/album/1.jpg",
        },
        {
          id: 5,
          url: "https://cdn.uviewui.com/uview/album/1.jpg",
        },
        {
          id: 6,
          url: "https://cdn.uviewui.com/uview/album/1.jpg",
        },
        {
          id: 7,
          url: "https://cdn.uviewui.com/uview/album/1.jpg",
        },
        {
          id: 8,
          url: "https://cdn.uviewui.com/uview/album/1.jpg",
        },
        {
          id: 9,
          url: "https://cdn.uviewui.com/uview/album/1.jpg",
        },
        {
          id: 10,
          url: "https://cdn.uviewui.com/uview/album/1.jpg",
        },
        {
          id: 11,
          url: "https://cdn.uviewui.com/uview/album/1.jpg",
        },
        {
          id: 12,
          url: "https://cdn.uviewui.com/uview/album/1.jpg",
        },
      ],
      selectPersonList: [],
    };
  },
  methods: {
    selectAll(value) {
      if (value) {
        // 全选
        this.allPersonList.forEach((item) => {
          this.selectPersonList.push(item);
        });
        return;
      }
      // 全不选
      this.selectPersonList = [];
    },
    clickPersonItem(person) {
      if (this.selectPersonList.includes(person)) {
        // 如果当前选中的 人员列表中有点击的人员
        let index = this.selectPersonList.findIndex(
          (item) => item.id === person.id
        );
        // 移除点击的人员
        this.selectPersonList.splice(index, 1);
      } else {
        this.selectPersonList.push(person);
      }
    },
    confirmSelect() {
      this.$emit('getSelectPerson', this.selectPersonList)
      this.isPopupShow = false;
    } 
  },
};
</script>

<style lang="scss" scoped>
.select-person {
  width: 100%;
  font-size: $base-font;
  .person-popup {
    width: 520rpx;
    // height: 600rpx;
    padding: 20rpx;
    font-size: $base-font;
    .top-icon {
      display: flex;
      justify-content: flex-end;
      font-size: $base-font;
      margin-bottom: 20rpx;
      .select-text {
        margin-right: 20rpx;
      }
    }
    .list {
      height: 50vh;
      overflow-y: scroll;
      &-item {
        display: flex;
        // height: 80rpx;
        padding: 20rpx 0;
        // background-color: skyblue;
        justify-content: space-around;
        align-items: center;
        margin: 0 20rpx;
        border-bottom: 1rpx solid $light-color;
        .nickname {
          flex: 1;
          padding: 0 20rpx;
        }
      }
    }
    .bottom-icon {
      display: flex;
      justify-content: space-between;
      font-size: $medium-font;
      padding-top: 20rpx;
      .confirm-icon {
        color: $primary-color;
      }
      .total {
        flex: 1;
        font-size: $base-font;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 20rpx;
      }
    }
  }
}
</style>
