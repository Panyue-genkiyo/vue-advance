//该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";
import About from "@/components/About";
import Home from '@/components/Home';

//创建并默认暴露一个路由器
export default new VueRouter({
   routes:[
       {
           path:'/about',
           component: About
       },
       {
           path:'/home',
           component: Home
       }
   ]
});

