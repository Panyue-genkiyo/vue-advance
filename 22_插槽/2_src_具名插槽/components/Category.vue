<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!--插槽,等着组件的使用者进行填充-->
    <slot name="center">我是默认值</slot>
    <slot name="footer">我是默认值</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:[ 'listData', 'title' ]
}
</script>

<style scoped>
   .category{
     background: skyblue;
     width: 200px;
     height: 300px;
   }
   h3{
     text-align: center;
     background: orange;
   }
   img{
     width: 100%;
   }
   video{
     width: 100%;
   }
</style>
