<template>
  <view class="form">
    <u-form :model="formModel" ref="uForm">
      <u-form-item
        v-for="(item, index) in formData"
        :key="item.id"
        :label="computeLabel(index, item.type, item.title)"
        labelPosition="top"
        :prop="String(item.id)"
      >
        <m-radio-slot
          v-if="item.type === 'single'"
          :radioData="item"
          @getRadioCheckboxValue="getRadioCheckboxValue"
        />
        <m-checkbox-slot
          v-else
          :checkboxData="item"
          @getRadioCheckboxValue="getRadioCheckboxValue"
        />
      </u-form-item>
    </u-form>
    <u-button @click="submit">提交答案</u-button>
  </view>
</template>

<script>
export default {
  props: ["formData"],
  computed: {
    computeLabel(index, type, title) {
      return (index, type, title) => {
        let typeStr = "单选";
        if (type === "multiple") typeStr = "多选";
        return `${index + 1}、(${typeStr}) ${title}`;
      };
    },
    computeData(id, choose) {
      return (id, choose) => {
        return { id, choose };
      };
    },
  },
  data() {
    return {
      formModel: {
        defaultValue: null,
      },
    };
  },
  mounted() {
    // 动态设置表单校验规则
    let rules = {};
    this.formData.forEach((item) => {
      if (item.type === "single") {
        rules[item.id] = this.setRadioRules();
      }
      if (item.type === "multiple") {
        rules[item.id] = this.setCheckboxRules();
      }
    });
    this.$refs.uForm.setRules(rules);
  },
  methods: {
    submit() {
      console.log(this.formModel)
      this.$refs.uForm
        .validate()
        .then((res) => {
          console.log(this.formModel);
          uni.$u.toast("提交答案成功");
        })
        .catch((errors) => {
          uni.$u.toast("请确认答题已完成");
        });
    },
    // 动态设置表单校验规则
    setRadioRules() {
      return {
        validator: (_, value) => {
          return Boolean(value);
        },
        message: "请选择问题答案",
      };
    },
    setCheckboxRules() {
      return {
        validator: (_, value) => {
          if (value && value.length >= 2) return true;
          return false;
        },
        message: "至少选择两项",
      };
    },
    // 获取 radio 和 checkbox 传递过来的值
    getRadioCheckboxValue(val) {
      if (Object.keys(this.formModel).includes("defaultValue"))
        this.formModel = {};
      this.formModel[val.id] = val.answer;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  .u-form {
    ::v-deep .u-form-item__body__left {
      width: 100% !important;
      margin-bottom: 20rpx !important;
      .u-form-item__body__left__content__label {
        font-size: $normal-font;
        font-weight: 500;
      }
    }
    ::v-deep .u-form-item__body__right__message {
      margin: 0 !important;
    }
  }
  .u-button {
    margin-top: 20rpx;
    background-color: $primary-color;
    border-color: $primary-color;
    color: $white;
  }
}
</style>
