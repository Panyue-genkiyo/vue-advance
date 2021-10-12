<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  mounted() {
    //输出它身上的路由
    console.log('The route of About',this.$route);
  }
}
</script>

<style scoped>

</style>
