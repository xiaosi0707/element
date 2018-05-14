<template>
    <div>
      <v-header title="分类"></v-header>
      <div class="filter">
        <el-cascader
          :options="options"
          :show-all-levels="false"
          @change="selectedCategory"
        ></el-cascader>
        <el-cascader
          :options="order"
          :show-all-levels="false"
        ></el-cascader>
      </div>
      <div class="shop-list">
        <dl v-for="(item, index) in shopList" :key="index">
          <dt><img :src="'http://elm.cangdu.org/img/' + item.image_path" alt=""></dt>
          <dd>
            <h3>{{ item.name }}</h3>
          </dd>
        </dl>
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
      options: [
        {
          value: '',
          label: '',
          children: [
            {
              value: '',
              label: ''
            }
          ]
        }
      ],
      /*
      * '智能排序',
        '距离最近',
        '销量最高',
        '起送价最低',
        '配送速度最快',
        '评分最高'
      * */
      order: [
        {
          value: '智能排序',
          label: '智能排序'
        },
        {
          value: '距离最近',
          label: '距离最近'
        },
        {
          value: '销量最高',
          label: '销量最高'
        },
        {
          value: '起送价最低',
          label: '起送价最低'
        },
        {
          value: '配送速度最快',
          label: '配送速度最快'
        },
        {
          value: '评分最高',
          label: '评分最高'
        }
      ],
      shopList: []
    }
  },
  created () {
    console.log(this.$route)
    this.$axios.get('http://cangdu.org:8001/shopping/v2/restaurant/category', {
      params: {
      }
    }).then((res) => {
      let { data } = res
      this.options = data
      this.options.map((item, index) => {
        this.options[index].label = item.name
        this.options[index].value = item.name
        this.options[index].children = item.sub_categories
        this.options[index].children.map((child, i) => {
          this.options[index].children[i].label = child.name
          this.options[index].children[i].value = child.name
        })
      })
    })
  },
  methods: {
    selectedCategory () {
      console.log(this.$route.query)
      let { latitude, longitude } = this.$route.query
      this.$axios.get('http://cangdu.org:8001/shopping/restaurants', {
        params: {
          latitude: latitude,
          longitude: longitude
        }
      }).then((res) => {
        this.shopList = res.data
      })
    }
  }
}
</script>

<style lang="scss">
@import "../assets/css/app.scss";
.el-input {
    width: rem(350);
    border-radius: 0;
  }
.el-input__inner {
  border: 0;
  border-radius: 0;
  color: #333;
  font-size: rem(36);
}
  .shop-list {
    width: 95%;
    margin: 0 auto;
    dl {
      margin-top: rem(48);
      width: 100%;
      overflow: hidden;
      dt {
        width: rem(120);
        height: rem(120);
        float: left;
        margin-right: rem(24);
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
