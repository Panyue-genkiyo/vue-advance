<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  mounted() {
    //输出它身上的路由
    console.log('The route of About', this.$route);
  },
  //组件内路由守卫

  //与前置和后置是两码事
  //通过路由规则进入该组件时被调用,注意一定是通过路由规则进入组件，普通的组件装载是不会调用的
  beforeRouteEnter(to, from, next){
    console.log('App---beforeRouteEnter');
    console.log(from, to);
    const { isAuth } = to.meta;
    if(isAuth){
             //代表需要鉴权
      if(localStorage.getItem('school') === 'wust1') next();//类似于nodejs中间件
      else alert('无权限');
    }else{
      next();
    }
  },
  //通过路由规则离开该组件时被调用
  beforeRouteLeave(to, from, next){
    console.log('App---beforeRouteLeave');
    console.log(from, to);
    next();
  }
}
</script>

<style scoped>

</style>
