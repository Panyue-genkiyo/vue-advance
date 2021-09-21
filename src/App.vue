<template>
   <div>
     <img src="./assets/logo.png" alt="logo">
     <School></School>
     <Student></Student>
   </div>
</template>

<script>
import School from './components/School';
import Student from "./components/Student";

export default {
  name: "App",
  //汇总所有的组件
  components:{
    Student,
    School
  }
}
</script>

