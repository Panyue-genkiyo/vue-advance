<template>
   <div class="app">
      <h1>{{ msg }},学生姓名是:{{ studentName }}</h1>
      <!--通过绑定一个自定义事件实现了子给父传递数据(自定义事件绑在子组件上) 第一种写法使用@或v-on-->
      <!--once代表改事件只执行一次-->
<!--      <Student @personalEvent="getStudentName" @demo="demo"/>-->
      <!--第二种写法使用ref绑定事件--->
      <Student ref="student" @click.native="show"/>
      <!--通过父组件给子组件传递函数类型的props实现了子给父传递数据-->
      <School :getSchoolName="getSchoolName"/>
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
  data(){
    return {
      msg: 'helloこんにちは',
      studentName:''
    }
  },
  methods:{
    getSchoolName(name){
      console.log(`app收到了学校名,${name}`);
    },
    getStudentName(name, ...params){
      console.log('自定义');
      console.log(`app收到了学生名, ${name}`);
      this.studentName = name;
      console.log(`剩余参数,${params}`);
    },
    demo(){
      console.log('demo事件被触发了');
    },
    show(){
      console.log(`123`);
    }
  },
  mounted() {
    //可以通过ref拿到组件实例对象
    // setTimeout(() => {
    //   this.$refs.student.$on('personalEvent', this.getStudentName); //当App组件一挂载完毕经过三秒我就在Student组件上绑定事件
    //   //this.$refs.student.$once('personalEvent', this.getStudentName); //注意此时事件只执行一次就不执行了(once),一次性
    // },3000)
    //注意这里回调要写成剪头函数，不然this会丢失,这个this就是(vc)app,而不是(vc)student
    this.$refs.student.$on('personalEvent', (name) => {
       console.log(this);
       console.log(name);
       this.studentName = name;
    });
  }
}
</script>

<style>
   /*
   全局的样式是不需要加scoped
   全局共享
   */
   .app{
     background: gray;
     padding: 5px;
   }
</style>


