<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <!--让其收集到的数据全是number类型的 number修饰符-->
    <select v-model.number="n">
      <!--让所有的value全部绑定为数字-->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  //计数组件
  name: "Count",
  data(){
    return {
      n: 1,// 代表用户在select框开始的时候选择的数字
      sum: 0 //当前的和
    }
  },
  methods:{
    increment(){
      this.sum += this.n;
    },
    decrement(){
      this.sum -= this.n;
    },
    incrementOdd(){
      this.sum = this.sum % 2 !== 0 ? this.sum + this.n :  this.sum;
    },
    incrementWait(){
      setTimeout(() => this.sum += this.n,2000)
    }
  }
}
</script>

<style scoped>
   button{
     margin-left: 5px;
   }
</style>
