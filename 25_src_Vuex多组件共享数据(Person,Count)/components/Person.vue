<template>
   <div>
     <h1>人员列表</h1>
     <h2 style="color:skyblue;">Count组件求和为:{{ sum }}</h2>
     <input type="text" placeholder="请输入名字" v-model="name" />
     <button @click="add">添加</button>
     <ul>
       <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
     </ul>
   </div>
</template>

<script>
// import { mapState } from 'vuex';
import {nanoid} from "nanoid";
export default {
  name: "Person",
  data(){
    return {
      name: '',
    }
  },
  methods:{
     add(){
       const perObj = {
         id: nanoid(),
         name: this.name,
       }
       console.log(perObj);
       this.name = '';
       this.$store.commit('ADD_PERSON', perObj);
     }
  },
  computed:{
    // ...mapState(['personList']),
    personList(){
      return this.$store.state.personList;
    },
    sum(){
      return this.$store.state.sum;
    }
  },
}
</script>

<style scoped>
   button{
     margin-left: 5px;
   }
   ul{
     margin-top: 5px;
   }
</style>
