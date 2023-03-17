<template>
  <view class="launch-meet">
    <u-form :model="meetForm" ref="uForm" class="meet-form" labelPosition="top">
      <u-form-item label="会议标题:" prop="title">
        <u-input v-model="meetForm.title" fontSize="12px" />
      </u-form-item>
      <u-form-item label="会议描述:" prop="desc">
        <u--textarea
          v-model="meetForm.desc"
          placeholder="请输入会议描述"
          count
          placeholderClass="textarea-holder"
        ></u--textarea>
      </u-form-item>
      <u-form-item label="会议地址" prop="address">
        <u-input v-model="meetForm.address"></u-input>
      </u-form-item>
      <u-form-item label="会议类别:" prop="sort">
        <m-radio :list="radioList" @getRadioValue="getRadioValue" />
      </u-form-item>
      <u-form-item label="会议时间:" prop="date">
        <m-date-picker @getStartDate="getStartDate" @getEndDate="getEndDate" />
      </u-form-item>
      <u-form-item label="会议议程:">
        <m-step :date="meetForm.date" />
      </u-form-item>
      <u-form-item label="参会人员:">
        <view class="person-list"
          ><view class="all-list">
            <view
              class="all-list-item"
              v-for="item in selectPersonList"
              :key="item.id"
            >
              <u-avatar :size="30" :src="item.url" shape="square"></u-avatar>
              <text class="nickname">{{ item.id }}</text>
            </view>
          </view>
          <m-select-meet-person @getSelectPerson="getSelectPerson" />
        </view>
      </u-form-item>
      <u-form-item>
        <u-button class="submit" @click="submit">发起</u-button>
      </u-form-item>
    </u-form>
  </view>
</template>
<script>
export default {
  data() {
    return {
      radioList: [
        {
          name: "三会一课(固定党日)",
        },
        {
          name: "组织生活会(民主评议党员)",
        },
        {
          name: "其他会议",
        },
      ],
      meetForm: {
        title: "",
        desc: "",
        address: "",
        sort: "",
        date: {
          startDate: null,
          endDate: null,
        },
      },
      rules: {
        title: [
          {
            required: true,
            message: "请输入会议标题",
            // 可以单个或者同时写两个触发验证方式
            trigger: ["change", "blur"],
          },
          {
            required: true,
            min: 7,
            max: 24,
            message: "标题为7-24个字符",
            trigger: ["change", "blur"],
          },
        ],
        desc: [
          {
            required: true,
            message: "请输入会议描述",
            trigger: ["change", "blur"],
          },
        ],
        address: [
          {
            required: true,
            message: "请输入会议地址",
            trigger: ["change", "blur"],
          },
        ],
        // sort: [
        //   {
        //     required: true,
        //     message: "请选择会议类别",
        //     trigger: ['change']
        //   }
        // ]
        date: [
          {
            validator: (rule, value, callback) => {
              return Boolean(value.startDate) && Boolean(value.endDate);
            },
            message: "请确认会议时间",
            trigger: ["change", "blur"],
          },
        ],
      },
      selectPersonList: null,
    };
  },

  // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
  mounted() {
    this.$refs.uForm.setRules(this.rules);
  },
  methods: {
    // 接收单选框传递过来的值
    getRadioValue(value) {
      this.meetForm.sort = value;
    },
    // 接收会议开始时间
    getStartDate(value) {
      this.meetForm.date.startDate = value;
      // console.log(value)
    },
    // 接收会议结束时间
    getEndDate(value) {
      this.meetForm.date.endDate = value;
    },
    // 接收选中的用户
    getSelectPerson(value) {
      console.log(value);
      this.selectPersonList = value;
      console.log(this.selectPersonList);
    },
    // 提交
    submit() {
      // console.log(this.meetForm)
      this.$refs.uForm
        .validate()
        .then((res) => {
          uni.$u.toast("校验通过");
        })
        .catch((errors) => {
          uni.$u.toast("校验失败");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.launch-meet {
  padding: 20rpx;
  ::v-deep .meet-form {
    font-size: 12px !important;

    .u-form-item {
      // padding-bottom: 10rpx;
      position: relative;
      .u-form-item__body__right__message {
        position: absolute;
        bottom: -10rpx;
      }
      .u-form-item__body__left {
        width: 200rpx !important;
      }
      .u-form-item__body__right {
        padding: 0 20rpx;
      }
      .u-form-item__body__left__content__label {
        font-size: $base-font;
      }
      .u-textarea {
        background-color: $base-bg;
        textarea {
          color: $base-color;
          font-size: $base-font;
          .uni-textarea-placeholder {
            color: $light-color !important;
            font-size: $base-font;
          }
        }
        .u-textarea__count {
          background-color: $base-bg !important;
        }
      }
      .u-form-item__body__right__message {
        margin-left: 20rpx !important;
      }
      .submit {
        background-color: $primary-color;
        border-color: $primary-color;
        color: $white;
      }
      .person-list {
        width: 100%;
        padding-top: 20rpx;
        .all-list {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          &-item {
            width: 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
            jusity-content: space-around;
            margin-bottom: 20rpx;
            .nickname {
              display: inline-block;
              margin-top: 10rpx;
              text-align: center;
              width: 80%;
              font-size: 14rpx;
              text-overflow: ellipsis;
              overflow: hidden;
              word-break: break-all;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}
</style>
