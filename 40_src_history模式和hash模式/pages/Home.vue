<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!--include的值代表要缓存的组件，比如下面代表在Home组件中要缓存News组件(组件名)-->
      <keep-alive include="News">
        <router-view>
        </router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  // mounted() {
  //   console.log('Home组件挂载完毕', this);
  //   window.homeRoute = this.$route;
  //   window.homeRouter = this.$router;
  // },
  // // beforeDestroy() {
  // //   console.log('Home组件将要被销毁');
  // // }
}
</script>

<style scoped>
</style>
