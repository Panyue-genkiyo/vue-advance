<template>
  <div>
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--原始使用a标签跳转多个页面,多页面应用-->
<!--          <a class="list-group-item active" href="./about.html">About</a>-->
<!--          <a class="list-group-item" href="./home.html">Home</a>-->
          <!--vue中借助router=link标签实现路由的切换-->
<!--          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>-->
          <router-link class="list-group-item" active-class="active" :to="{name: 'regard'}">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--router-view确定视图的位置-->
            <router-view>
            </router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
export default {
  name: "App",
  components: {Banner},
}
</script>
<style lang="css" scoped>

</style>



