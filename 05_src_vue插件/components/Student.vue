<template>
   <div >
     <h2>姓名:{{  name }}</h2>
     <h2>性别: {{ sex }}</h2>
     <input v-fbind:value="name"/>
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
}
</script>

