<template>
  <div>
    <h1>当前求和为: {{ sum }}</h1>
    <!--让其收集到的数据全是number类型的 number修饰符-->
    <h3>当前求和放大3倍为:{{ bigSum }}</h3>
    <h3>我在{{ school }}, 学习{{ subject }}</h3>
    <h3 style="color: red">下方列表的总人数 {{ personList.length }}</h3>
    <select v-model.number="n">
      <!--让所有的value全部绑定为数字-->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementIfOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  //计数组件
  name: "Count",
  data(){
    return {
      n: 1,// 代表用户在select框开始的时候选择的数字
    }
  },
  computed:{
    //借助mapState从state中生成计算属性,对象写法
    // ... mapState({
    //   sum:'sum',
    //   school: 'school',
    //   subject: 'subject'
    // }),
    //借助mapState从state中生成计算属性,数组写法(即代表了生成的计算属性名为sum，同时也代表了从state找到sum)
    ... mapState('count', ['sum', 'subject', 'school']),
    ...mapState('person', ['personList']),

    //借助mapGetters从getters中生成计算属性,对象写法
    // ...mapGetters({ bigSum: 'bigSum' }),
    //借助mapGetters从getters中生成计算属性,数组写法
    ...mapGetters('count',['bigSum']),

  },
  methods:{
    // increment(){
    //   this.$store.commit('INCREMENT', this.n);
    // },
    // decrement(){
    //   this.$store.commit('DECREMENT', this.n);
    // },
    //借助mapMutations生成对应方法，方法会调用commit去联系mutations，对象写法
    ...mapMutations('count',{
      increment: 'INCREMENT',
      decrement: 'DECREMENT',
    }),
    //借助数组写法生成方法,但注意你生成的方法名和mutations里对应的方法名将会一样的
    // ...mapMutations(['increment', 'decrement']),

    // incrementOdd(){
    //   this.$store.dispatch('incrementIfOdd', this.n);
    // },
    // incrementWait(){
    //   this.$store.dispatch('incrementWait', this.n);
    // }

    //借助mapMutations生成对应方法，方法会调用dispatch去联系actions，对象写法
    // ...mapActions({
    //   incrementIfOdd: 'incrementIfOdd',
    //   incrementWait: 'incrementWait',
    // }),

    ...mapActions('count',['incrementWait', 'incrementIfOdd']), //数组写法,同上
  },
}
</script>

<style scoped>
   button{
     margin-left: 5px;
   }
</style>
