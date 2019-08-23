<template>
  <div class="container">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        required
        clearable
        label="手机号"
        placeholder="请输入手机号"
        v-validate="'required|mobile'"  name="mobile"
        :error-message="errors.first('mobile')"
        left-icon="phone-o"
      />

      <van-field
        v-model="user.code"
        center
        left-icon="chat-o"
        clearable
        required
        v-validate="'required|code'"  name="code"
        :error-message="errors.first('code')"
        label="验证码"
        placeholder="请输入验证码"
      >
        <van-button class="btn" slot="button" size="small">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div style="padding:20px">
      <van-button class="login" :loading="isloading" @click="onlogin" type="info">登录</van-button>
    </div>
    <div class="text">
        <span>隐私条款</span>
    </div>
  </div>
</template>

<script>
import { userLogin } from '@/api/user.js'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      user: {
        mobile: null,
        code: null
      },
      isloading: false
    }
  },
  created () {
    this.customValidatorMessage()
  },
  mounted () {
    this.$validator.extend('mobile', {
      getMessage: field => '手机号有误',
      validate: value => {
        return /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
      }
    })
    this.$validator.extend('code', {
      getMessage: field => '验证码有误',
      validate: value => {
        return /^[0-9]{6}$/.test(value)
      }
    })
  },
  methods: {
    ...mapMutations(['changeUser']),
    async onlogin () {
      try {
        const vaild = this.$validator.validateAll()
        if (!vaild) {
          return
        }
        this.isloading = true
        const { data } = await userLogin(this.user)
        this.changeUser(data.data)
        //   this.$router.push('home')
        this.isloading = false
      } catch (err) {
        if (err.response && err.response.status === 400) {
          this.$toast.fail('手机号或者验证码错误！')
        }
        this.isloading = false
      }
    },
    customValidatorMessage () {
      const dict = {
        custom: {
          mobile: {
            required: '手机号不能为空'
          },
          code: {
            required: () => '验证码不能为空'
          }
        }
      }
      this.$validator.localize('zh_CN', dict)
    }
  }
}
</script>

<style scoped lang="less">
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #f6f8f9;
  .van-cell:not(:last-child)::after {
    border-bottom: 1px solid #f0f0f0;
    right: 16px;
  }
  .btn {
    background: #eeeeee;
    border-radius: 15px;
    color: #9a9a9a;
  }
  .login {
    width: 100%;
    border-radius: 5px;
  }
  .text {
      width: 100%;
      text-align: center;
      position:absolute;
      bottom: 2%;
      color: #666666;
      font-size: 14px;
  }
}
</style>
