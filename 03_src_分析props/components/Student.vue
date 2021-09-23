<template>
   <div class="demo">
     <!--注意props传递过来的值是不能改的(尽量避免去改，控制台会有警告)-->
     <h1>{{ msg }}</h1>
     <h2>姓名:{{ myName }}</h2>
     <h2>年龄: {{  age }}</h2>
     <h2>性别: {{ sex }}</h2>
     <button @click="updateName">尝试修改名字</button>
   </div>
</template>

<script>
export default {
  name: "Student",
  // props: ['name', 'sex', 'age'], //简单声明接收
  data(){
    console.log(this);
    return {
      //如果props和data存在同名的属性，会报错，但已props传递的属性值为主
      //注意props属性名不能是vue底层已征用的属性名(比如key, ref等等)
      msg: '我是一名普通的大学生',
      myName: this.name //把props传递过来的值当成vc的状态，这样改name是不会出问题的，因为你没有直接去修改props
    }
  },
  methods:{
    updateName(){
      this.myName = 'sss';
    }
  },
  //限制props中属性的类型 类型错误了会提示错误信息
  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number
  // }

  //接收时不仅限制类型还加上默认值的指定并指定它的必须性
  props:{
    name:{
      type: String, //类型
      required: true //必要的
    },
    age:{
      type: Number,
      default: 99 //默认值
    },
    sex:{
      type: String,
      required: true
    }
  }
}
</script>

