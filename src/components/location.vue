<template>
  <div>
    <div class="location"><router-link :to="{name:'address', params: {cityId: cityId}}" >{{ location }}</router-link></div>
    <div>
      <ul>
        <router-link :to="{ name: 'address', params: {cityId: item.id} }" v-for="(item, index) in hot" :key="index">{{ item.name }}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      location: '',
      cityId: '',
      hot: []
    }
  },
  created () {
    // 定位城市
    this.$axios.get(global.globalData.api + 'cities', {
      params: {
        type: 'guess'
      }
    }).then((res) => {
      let { name, id } = res.data
      this.location = name
      this.cityId = id
    })
    // 热门
    this.$axios.get(global.globalData.api + 'cities', {
      params: {
        type: 'hot'
      }
    }).then((res) => {
      let { data } = res
      this.hot = data
    })
    // 所有
    // this.$axios.get('http://cangdu.org:8001/v1/cities', {
    //   params: {
    //     type: 'group'
    //   }
    // }).then((res) => {
    //   console.log(res)
    //   let { data } = res
    //   this.hot = data
    // })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.location {
  line-height: 24px;
  border-bottom: 1px #ccc solid;
  padding-bottom: 24px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
  margin:12px;
}
</style>
