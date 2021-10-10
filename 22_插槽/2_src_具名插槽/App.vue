<template>
   <div class="container">
     <Category title="美食">
       <img slot="center" src="" alt="delicious food"/>
       <a href="https://www.baidu.com" slot="footer">百度</a>
     </Category>

     <Category title="游戏" :listData="games">
       <ul slot="center">
         <li v-for="(g , index) in games" :key="index">{{ g }}</li>
       </ul>
       <div slot="footer" class="foot">
         <a href="https://www.baidu.com">单机游戏</a>
         <a href="https://www.baidu.com">网络游戏</a>
       </div>
     </Category>

     <Category title="电影">
       <video slot="center" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
       <!--但是注意v-slot仅仅只能被用在组件上或者template标签上-->
       <template v-slot:footer>
         <div class="foot">
           <a href="https://www.baidu.com">经典</a>
           <a href="https://www.baidu.com">热门</a>
           <a href="https://www.baidu.com">推荐</a>
         </div>
         <h4>欢迎来到影院观赏</h4>
       </template>
     </Category>
   </div>
</template>

<script>
import Category from "@/components/Category";
export default {
  name: "App",
  components:{
    Category
  },
  data(){
    return {
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
    }
  }
}
</script>
<style lang="css" scoped>
   .container, .foot{
     display: flex;
     justify-content: space-around;
   }
   h4{
     text-align: center;
   }
</style>



