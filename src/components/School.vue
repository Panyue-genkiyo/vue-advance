<template>
<!--  组件的交互-->
   <div class="demo">
     <h2>学校名称:{{ name }}</h2>
     <h2>学校地址:{{ address }}</h2>
     <button @click="showName">点我提示学校名</button>
   </div>
</template>

<style>
  /*css样式*/
  .demo{
    background: skyblue;
  }
</style>


<script>
  //组件交互的代码
  //export default school分别暴露
  export default {
    name: 'School', //开发者工具最终呈现的名字为School
    data(){
      return {
        name:'武汉科技大学',
        address: '武汉'
      }
    },
    methods:{
      showName(){
        alert(this.name);
      }
    }
  };

  //统一暴露
  // export { school };
  // export default school //默认暴露
</script>
