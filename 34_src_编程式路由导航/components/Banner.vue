<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="forward">前进</button>
    <button @click="back">后退</button>
    <button @click="test">测试一下go</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods:{
     forward(){
       this.$router.forward();
     },
     back(){
       this.$router.back();
     },
     test(){
       this.$router.go(-2);
     }
  }
}
</script>

<style scoped>
   button{
     margin-right: 5px;
   }
</style>
