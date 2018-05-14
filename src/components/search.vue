<template>
  <div>
    <v-header title="搜索"></v-header>
    <div class="search">
      <p>
        <input type="text" placeholder="请输入商家或美食名称" v-model="val"><button @click="searchSub">提交</button>
      </p>
      <ul class="search-item">
        <li v-for="(item, index) in searchList" :key="index">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/header'
export default {
  components: {
    vHeader
  },
  data () {
    return {
      val: '',
      searchList: []
    }
  },
  created () {
  },
  methods: {
    searchSub () {
      let { geohash } = this.$route.query
      this.$axios.get(global.globalData.apiV4 + 'restaurants', {
        params: {
          geohash: geohash,
          keyword: this.val
        }
      }).then((res) => {
        console.log(res)
        let { data } = res
        this.searchList = data
      })
    }
  }
}
</script>

<style scoped lang="scss">
.search {
  width: 95%;
  margin: 0 auto;
  p {
        input {
          width: 80%;
          height: rem(32);
        }
  }
  .search-item {
    li {
      height: rem(72);
      line-height: rem(72);
    }
  }
}
</style>
