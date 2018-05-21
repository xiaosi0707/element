<template>
    <div class="shop">
      <dl>
        <dt>
          <img class="shop-img" :src="'http://elm.cangdu.org/img/' + shopInfo.image_path" alt="">
        </dt>
        <dd>
          <h3>标题</h3>
        </dd>
      </dl>
    </div>
</template>

<script>
export default {
  data () {
    return {
      shopInfo: {}
    }
  },
  created () {
    let { shopid } = this.$route.params
    this.$axios.get('http://cangdu.org:8001/shopping/restaurant/' + shopid).then((res) => {
      console.log(res)
      let { data } = res
      this.shopInfo = data
    })
  }
}
</script>

<style lang="scss" scoped>
  .shop {
    width: 100%;
    height: rem(340);
    background: orange;
    dl {
      dt {
        width: rem(260);
        height: rem(260);
        &.shop-img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
