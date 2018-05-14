<template>
    <div>
      <section class="form">
        <input type="text" placeholder="输入学校、商务楼、地址" v-model="searchVal">
        <input type="button" value="提交" @click="search">
      </section>
      <section class="address-list">
        <ul>
          <router-link tag="li" :to="{name: 'index', params: {addressInfo: item}}" v-for="(item, index) in addressList" :key="index">{{ item.name }}</router-link>
        </ul>
      </section>
      <section class="history">
        <p>搜索历史</p>
        <ul>
          <li>
            <span>北京吉利大学</span>
            <small>北京市昌平区昌流路与神牛路交叉口附近</small>
          </li>
        </ul>
      </section>
    </div>
</template>

<script>
export default {
  data () {
    return {
      searchVal: '',
      addressList: []
    }
  },
  created () {
    let { cityId } = this.$route.params
    this.$axios.get(global.globalData.api + 'cities/' + cityId).then((res) => {
      console.log(res)
    })
  },
  methods: {
    search () {
      let { cityId } = this.$route.params
      this.$axios.get(global.globalData.api + 'pois', {
        params: {
          city_id: cityId,
          keyword: this.searchVal
        }
      }).then((res) => {
        this.addressList = res.data
      })
    }
  }
}
</script>

<style scoped>
.address-list ul li{
  height: 36px;
  line-height: 36px;
  text-align: left;
}
.history {
}
</style>
