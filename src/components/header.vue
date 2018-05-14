<template>
  <header>
    <span @click="back">返回</span>
    <p>{{ val }}</p>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      val: ''
    }
  },
  created () {
    this.val = this.title
  },
  methods: {
    back () {
      history.back(-1)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/app.scss";
header {
  width: 100%;
  height: rem(150);
  line-height: rem(150);
  background: #3190e8;
  color: white;
  position: relative;
  span {
    position: absolute;
    left: rem(24);
  }
  p {
    width: 100%;
    text-align: center;
    font-size: rem(56);
    font-weight: bold;
  }
}
</style>
