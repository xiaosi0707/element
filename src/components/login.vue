<template>
  <div>
    <v-header title="密码登录"></v-header>
    <el-input placeholder="请输入内容"></el-input>
    <el-input type="password" placeholder="请输入内容"></el-input>
    <p>
      <el-input placeholder="验证码"></el-input>
      <img :src="imgSrc" alt="" @click="changeCode">
    </p>
  </div>
</template>

<script>
import vHeader from '@/components/header.vue'
export default {
  components: {
    vHeader
  },
  data () {
    return {
      imgSrc: '',
      urlRandom: Math.random()
    }
  },
  created () {
    this.changeCode()
  },
  methods: {
    changeCode () {
      this.$axios.post('http://cangdu.org:8001/v1/captchas').then((res) => {
        let { code } = res.data
        this.imgSrc = code
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
</style>
