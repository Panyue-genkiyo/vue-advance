<template>
  <ul>
    <li :style="{opacity}">欢迎学习vue</li>
    <li>news001 <input type="text"/></li>
    <li>news002 <input type="text"/></li>
    <li>news003 <input type="text"/></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data(){
    return {
      opacity: 1
    }
  },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     console.log('@')
  //     this.opacity -= 0.01;
  //     if(this.opacity <= 0) this.opacity = 1;
  //   },16);
  // },
  //
  // beforeDestroy() {
  //   console.log('News组件将要被销毁');
  //   clearInterval(this.timer);
  // },

  //激活(路由组件独有的两个钩子)
  activated() {
    console.log('News组件被激活');
      this.timer = setInterval(() => {
        console.log('@')
        this.opacity -= 0.01;
        if(this.opacity <= 0) this.opacity = 1;
      },16);
  },
  //失活
  deactivated() {
    console.log('News组件失活了');
    clearInterval(this.timer);
  }
}
</script>

<style scoped>

</style>
