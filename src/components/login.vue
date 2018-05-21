<template>
  <div>
    <v-header title="密码登录"></v-header>
    <el-input placeholder="请输入内容" v-model="userName"></el-input>
    <el-input type="password" placeholder="请输入内容" v-model="passWord"></el-input>
    <p>
      <el-input placeholder="验证码" v-model="code"></el-input>
      <img :src="imgSrc" alt="" @click="changeCode">
    </p>
    <el-button type="success" @click="login">登录</el-button>
  </div>
</template>

<script>
import vHeader from '@/components/header.vue'
import Axios from 'axios'
let Http = Axios.create({
  withCredentials: true,
  headers: {
    'Accept': 'application/json'
  }
})
export default {
  components: {
    vHeader
  },
  data () {
    return {
      userName: '',
      passWord: '',
      code: '',
      imgSrc: '',
      urlRandom: Math.random()
    }
  },
  created () {
    this.changeCode()
  },
  methods: {
    changeCode () {
      Http.post('http://cangdu.org:8001/v1/captchas').then((res) => {
        let { code } = res.data
        this.imgSrc = code
      })
    },
    login () {
      Http.post('http://cangdu.org:8001/v2/login', {
        username: this.userName,
        password: this.passWord,
        captcha_code: this.code
      }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss">
.el-input {
  .el-input__inner {
    border: 0;
    border-bottom: 1px #dcdfe6 solid;
    border-radius: 0;
  }
}
  p {
    .el-input {
      width: 70%;
      float: left;
      .el-input__inner {
        width: 100%;
      }
    }
  }
  .el-button {
    display: inline-block;
    width: 80%;
    margin-left: 10%;
  }
</style>
