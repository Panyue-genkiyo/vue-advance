<template>
   <div class="student">
     <h2>姓名:{{  name }}</h2>
     <h2>性别: {{ sex }}</h2>
     <h2>当前求和为:{{ number }}</h2>
     <button @click="add">点我加一</button>
     <button @click="sendStudentName">把学生名传递给app</button>
     <button @click="unbind">解绑自定义(personalEvent)事件</button>
     <button @click="death">销毁当前student组件的实例对象</button>
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
       number: 0
    }
  },
  methods:{
    add(){
      console.log(`add回调被调用了`);
      this.number ++;
    },
    sendStudentName(){
      //emit触发绑定在指定vc上的自定义事件 vc实例对象可以使用该方法
      //后面多余参数演示es6的参数收集
      this.$emit('personalEvent',this.name,666,777,888);
      // this.$emit('demo'); //同时触发两个事件
      // this.$emit('click'); 如果在组件身上使用原生事件不加native修饰符则会让vue认为你这是自定义事件
    },
    unbind(){
      //解绑事件
      this.$off('personalEvent'); //这种写法只能解绑一种自定义事件
      //this.$off([ 'personalEvent', 'demo' ]);// 解绑多个事件，参数为包含多个事件名的数组
      // this.$off(); //比较暴力，有几个自定义事件就全给你解绑了
    },
    death(){
      this.$destroy(); //销毁当前组件实例，销毁后所有该实例的自定义事件都不奏效了
    }
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
