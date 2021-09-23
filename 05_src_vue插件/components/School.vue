<template>
   <div >
     <h2>学校名称:{{  name | mySlice }}</h2>
     <h2>学校地址: {{ address }}</h2>
     <button @click="test">点我测试一下hello</button>
   </div>
</template>

<script>
export default {
  name: "School",
  data(){
    console.log(this);
    return {
       name: 'wust university',
       address: '武汉科技大学'
    }
  },
  methods:{
    test(){
      this.hello();
    }
  }
}
</script>

