<template>
  <view />
</template>

<script>
// redirect 用于微信通信
export default {
  data() {
    return {}
  },
  onLoad() {
    console.log('redirect', this.pageQuery)
    const { url } = this.pageQuery
    this.$forward(url, {replace: 1})
  },
}
</script>

<style lang="scss" scoped>
// #ifdef MP-WEIXIN
/deep/
// #endif
.cc-page {
  /* padding: 0 10px; */
}

</style>
