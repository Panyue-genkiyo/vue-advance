<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      keyword: '',
    }
  },
  methods:{
    //使用全局事件总线在组件间传递数据
    searchUsers(){
      this.$bus.$emit('updateListData', {
        isFirst: false,
        isLoading: true,
        errMsg: '',
        users: []
      })
      this.$http.get(`https://api.github.com/search/users?q=${this.keyword}`)
      .then(res => {
        console.log(res.data.items);
        this.$bus.$emit("updateListData", {
          isLoading: false,
          errMsg: '',
          users: res.data.items
        });
      })
      .catch(e => {
        console.log(`请求失败:${e.message}`)
        this.$bus.$emit("updateListData", {
          isLoading: false,
          errMsg: e.message,
          users: []
        });
      });
    }
  }
}
</script>

<style scoped>

</style>
