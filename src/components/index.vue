<template>
  <div>
    <div class="search">
      <router-link tag="span" :to="{path: '/search', query:{geohash: searchGeohash}}">搜索</router-link>
      <span>吉利大学</span>
      <router-link to="/account-info">人</router-link>
    </div>
    <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <div class="classify">
            <ul>
              <router-link tag="li" :to="{path: '/classify', query: { latitude: latitude, longitude: longitude, classifyId: item.id }}" v-for="(item, index) in filterClassify1" :key="index">{{ item.title }}</router-link>
            </ul>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="classify">
            <ul>
              <router-link tag="li" :to="{path: '/classify', query: { latitude: latitude, longitude: longitude }}" v-for="(item, index) in filterClassify2" :key="index">{{ item.title }}</router-link>
            </ul>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>

  <div class="nearby">
    <p>附近商家</p>
    <router-link tag="dl" :to="{ name: 'Shop', params: { shopid: item.id }}" v-for="(item, index) in nearbyBus" :key="index">
      <dt><img :src="'http://elm.cangdu.org/img/' + item.image_path" alt=""></dt>
      <dd>{{ item.name }}</dd>
    </router-link>
  </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination'
        },
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      classify: [],
      nearbyBus: [],
      searchGeohash: '',
      latitude: '',
      longitude: ''
    }
  },
  computed: {
    filterClassify1 () {
      return this.classify.slice(0, 8)
    },
    filterClassify2 () {
      return this.classify.slice(8, 16)
    },
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // 这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    this.swiper.slideTo(0, 0, false)
  },
  created () {
    let { latitude, longitude, geohash } = this.$route.params.addressInfo
    this.latitude = latitude
    this.longitude = longitude
    // 传递经纬度到搜索组件
    this.searchGeohash = geohash
    // 分类
    this.$axios.get(global.globalData.apiV2 + 'index_entry').then((res) => {
      this.classify = res.data
    })
    // 附近商铺
    this.$axios.get('http://cangdu.org:8001/shopping/restaurants', {
      params: {
        latitude: latitude,
        longitude: longitude
      }
    }).then((res) => {
      console.log(res)
      this.nearbyBus = res.data
    })
  },
  methods: {
    onSlideChangeStart (currentPage) {
      console.log('onSlideChangeStart', currentPage)
    },
    onSlideChangeEnd (currentPage) {
      console.log('onSlideChangeEnd', currentPage)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/app.scss";
.search {
  width: 100%;
  height: rem(150);
  line-height: rem(150);
  background: #3190e8;
  color: white;
  span {
    display: inline-block;
    &:first-of-type {
      width: 8%;
      padding-left: rem(12);
    }
    &:nth-of-type(2) {
      width: 80%;
      text-align: center;
      font-size: rem(52);
    }
    &:last-child {
      width: 8%;
      float: right;
      padding-right: rem(12);
    }
  }
  a {
    color: white;
  }

}
.classify {
  overflow: hidden;
  ul {
    li {
      display: block;
      width: rem(250);
      height: rem(60);
      text-align: center;
      float: left;
    }
  }
}
.nearby {
  width: 95%;
  margin: rem(36) auto;
  p {
    width: 100%;
  }
  dl {
    overflow: hidden;
    margin: rem(24) 0;
    dt {
      width: rem(120);
      height: rem(120);
      float: left;
      margin: 0 rem(24) 0 0;
      img {
        width: rem(120);
        height: rem(120);
      }
    }
  }
}
.swiper-container {
  width: 100%;
  height: rem(420);
}
</style>
