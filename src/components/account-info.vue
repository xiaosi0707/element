<template>
    <div>
      <input type="file" @change="uploadImg">
    </div>
</template>

<script>
export default {
  created () {
  },
  methods: {
    uploadImg () {
      this.$axios.post('http://cangdu.org:8001/v1/addimg/', {
        params: {
          type: 'avatar'
        }
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}

</script>

<style scoped>

</style>
