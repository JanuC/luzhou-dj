<template>
  <view class="form">
    <u-form :model="form" ref="uForm">
      <u-form-item label="账号:" prop="username">
        <u-input v-model="form.username" />
      </u-form-item>
      <u-form-item label="密码:" prop="password">
        <u-input
          v-model="form.password"
          type="password"
          autocomplete="new-password"
        />
      </u-form-item>
      <u-form-item label="验证码" prop="code">
        <u-input v-model="form.code" />
        <!-- <u-button slot="right" @click="getCode" :disabled="button.disabled">{{ -->
        <!--   button.text -->
        <!-- }}</u-button> -->
        <view class="img-box" slot="right">
          图片
          <!-- <img src="http://192.168.5.58:8087/captcha/init"></img> -->
        </view>
      </u-form-item>

      <!-- <u-form-item class="phone" label="电话:" prop="phone"> -->
      <!--   <u-input v-model="form.phone" /> -->
      <!--   <u-button slot="right" @click="getCode" :disabled="button.disabled">{{ -->
      <!--     button.text -->
      <!--   }}</u-button> -->
      <!-- </u-form-item> -->
      <!-- <u-form-item class="phone" label="验证码:" prop="code"> -->
      <!--   <u-input v-model="form.code" /> -->
      <!--   <u-button slot="right" @click="getCode" :disabled="button.disabled">{{ -->
      <!--     button.text -->
      <!--   }}</u-button> -->
    </u-form>

    <view class="forget-password">忘记密码？</view>
    <view class="button-box">
      <u-button type="primary" class="button primary" @click="submit"
        >登录</u-button
      >
      <u-button class="button" @click="resetForm">重置</u-button>
    </view>
    <view class="other-login">手机号码登录</view
    ><view class="register">还没有账号？去注册...</view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        phone: "",
        code: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            // 可以单个或者同时写两个触发验证方式
            trigger: ["change", "blur"],
          },
          {
            validator: (rule, value, callback) => {
              let reg_username = /^[a-zA-Z0-9_]{5,9}$/;
              return reg_username.test(value);
            },
            message: "用户名为5-9位的字母、数字、下划线组合",
            trigger: ["change", "blur"],
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: ["change", "blur"],
          },
          {
            validator: (rule, value, callback) => {
              let reg_password = /^[a-zA-Z0-9_]{8,16}$/;
              return reg_password.test(value);
            },
            message: "用户名为8-16位的字母、数字、下划线组合",
            trigger: ["change", "blur"],
          },
        ],
        // phone: [
        //   {
        //     required: true,
        //     message: "请输入手机号码",
        //     trigger: ["change", "blur"],
        //   },
        //   {
        //     validator: (rule, value, callback) => {
        //       let reg_tel =
        //         /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
        //       return reg_tel.test(value);
        //     },
        //     message: "手机号不正确",
        //     trigger: ["change", "blur"],
        //   },
        // ],
        code: [
          {
            required: true,
            message: "请输入验证码",
            trigger: ["change", "blur"],
          },
          {
            validator: (rule, value, callback) => {
              let reg_code = /^[0-9_]{6}$/;
              return reg_code.test(value);
            },
            message: "验证码为6位的数字",
            trigger: ["change", "blur"],
          },
        ],
      },
      button: {
        text: "获取验证码",
        disabled: false,
      },
    };
  },

  // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
  mounted() {
    this.$refs.uForm.setRules(this.rules);
  },
  methods: {
    // 获取验证码功能
    getCode() {
      // console.log(22222);
      this.button.disabled = true;
      let num = 10;
      this.button.text = `${num}秒后重新获取`;
      let timer;
      timer = setInterval(() => {
        num--;
        this.button.text = `${num}秒后重新获取`;
        if (num == 0) {
          clearInterval(timer);
          this.button.disabled = false;
          this.button.text = "获取验证码";
        }
      }, 1000);
    },
    // 表单检验
    submit() {
      this.$refs.uForm.validate((valid) => {
        if (valid) {
          console.log("验证通过");
        } else {
          console.log("验证失败");
        }
      });
    },
    // 重置表单
    resetForm() {
      this.$refs.uForm.resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  ::v-deep .u-form-item {
    height: 66px;
  }
  ::v-deep .u-form-item__body {
    .u-form-item__body__left {
      .u-form-item__body__left__content__label {
        font-size: $base-font;
      }
    }

    .item__body__right__content__icon {
      .u-button {
        font-size: $base-font;
      }
    }
  }
  .phone {
    ::v-deep .u-form-item__body__right__content__slot {
      margin-right: 20rpx;
    }
  }
  .img-box {
    width: 200rpx;
  }
}
.forget-password {
  font-size: $base-font;
  text-align: right;
  color: $light-color;
}
.button-box {
  width: 100%;
  margin-top: 20rpx;
  display: flex;
  justify-content: space-between !important;
  .u-button {
    width: 45%;
  }
}
.other-login {
  font-size: $base-font;
  text-align: right;
  margin-top: 60rpx;
  color: rgb(206, 17, 38);
}
.register {
  font-size: $base-font;
  text-align: right;
  margin-top: 30rpx;
}
/* .button { */
/*   margin-top: 40rpx; */
/* } */
</style>
