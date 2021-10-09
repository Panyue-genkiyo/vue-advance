<template>
   <div class="student">
     <h2>姓名:{{  name }}</h2>
     <h2>性别: {{ sex }}</h2>
     <button @click="sendStudentName">把学生名传递给school组件</button>
   </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data(){
    console.log(this);
    return {
       name: '张三',
       sex: '男',
    }
  },
  methods:{
    sendStudentName(){
      // this.$bus.$emit('hello', this.name);
      //发布消息
      pubsub.publish('hello', this.name);
    }
  },
}
</script>

<style scoped>
  .student{
    background: orange;
    padding: 5px;
    margin-bottom: 10px;
  }
</style>
