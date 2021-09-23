<template>
   <div>
      <Student/>
      <hr/>
      <School/>
   </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";
export default {
  name: "App",
  components:{
    School,
    Student,
  },
}
</script>

<style>
   /*
   全局的样式是不需要加scoped
   全局共享
   */
   .title{
     color: red;
   }
</style>


