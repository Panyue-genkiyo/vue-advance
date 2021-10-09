<template>
  <div>
    <button @click="isShow = !isShow">
      显示/隐藏
    </button>
    <!--transition 只能包裹一个元素而transition-group可以包含多个元素-->
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow" key="1">你好!</h1>
      <h1 v-show="isShow" key="2">Shanghai</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css';
export default {
  name: "Test3",
  data(){
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
  h1{
    background: orange;
  }
</style>
