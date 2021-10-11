<template>
   <div>
     <h1>人员列表</h1>
     <h2 style="color:skyblue;">Count组件求和为:{{ sum }}</h2>
     <h3>列表中第一个人的名字是:{{ firstPersonName }}</h3>
     <input type="text" placeholder="请输入名字" v-model="name" />
     <button @click="add">添加</button>
     <button @click="addWang">添加一个姓王的人</button>
     <button @click="addPersonServer">添加一个人名字随机</button>
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
       this.$store.commit('person/ADD_PERSON', perObj);
     },
    addWang(){
       const perObj = {
         id: nanoid(),
         name: this.name
       }
      this.$store.dispatch('person/addPersonWang', perObj);
      this.name = '';
    },
    addPersonServer(){
       this.$store.dispatch('person/addPersonServer');
    }
  },
  computed:{
    // ...mapState(['personList']),
    personList(){
      return this.$store.state.person.personList;
    },
    sum(){
      return this.$store.state.count.sum;
    },
    firstPersonName() {
      return this.$store.getters['person/firstPersonName'];
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
