<template>
  <div class="container">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="手机号"
        placeholder="请输入手机号"
        left-icon="phone-o"
      />

      <van-field
        v-model="sms"
        center
        left-icon="chat-o"
        clearable
        required
        label="验证码"
        placeholder="请输入验证码"
      >
        <van-button class="btn" slot="button" size="small">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div style="padding:20px">
      <van-button class="login" type="info">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {}
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
}
</style>
