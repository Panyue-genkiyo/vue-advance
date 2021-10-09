<template>
   <div class="student">
     <h2>姓名:{{  name }}</h2>
     <h2>性别: {{ sex }}</h2>
     <button @click="sendStudentName">把学生名传递给school组件</button>
   </div>
</template>

<script>

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
      this.$bus.$emit('hello', this.name);
    }
  },
  mounted() {
    // console.log(this.x); //vc.__proto__ === VueComponent.protoType VueComponent.protoType.__proto__ === Vue.prototype(完事了)
  }
}
</script>

<style scoped>
  .student{
    background: orange;
    padding: 5px;
    margin-bottom: 10px;
  }
</style>
