<template>
  <div class="row">
    <!--展示用户列表-->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!---欢迎词-->
    <h1 v-show="info.isFirst">Welcome!</h1>
    <!--加载中--->
    <h1 v-show="info.isLoading">Loading...</h1>
    <!---错误信息-->
    <h1 v-show="info.errMsg">Something has been wrong, errorMessage: {{ info.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data(){
    return {
      info : {
        isFirst: true, //是否为第一次使用
        users:[],
        isLoading: false, //是否在加载中
        errMsg: '',
      }
    }
  },
  mounted() {
    this.$bus.$on('updateListData', (dataObj) => {
      // console.log(`我是list，接到了数据data:`, users);
      // this.isFirst = isFirst;
      // this.isLoading = isLoading;
      // this.errMsg = errMsg;
      // this.users = users;
      this.info = { ...this.info, ...dataObj };
    });
  }

}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
