//该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";
import About from "@/pages/About";
import Home from '@/pages/Home';
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

//创建一个路由器
const router = new VueRouter({
   routes:[
       {
           name: 'regard',
           path:'/about',
           component: About,
           meta:{
               title: '关于'
           }
       },
       {
           name:'homepage',
           path:'/home',
           component: Home,
           meta:{
               title: '主页'
           },
           children:[
               {
                   name: 'ns',
                   path: 'news',
                   component: News,
                   //meta:路由元信息，可以配置是否需要校验的信息
                   meta:{
                       isAuth: true,
                       title: '新闻'
                   },
                   //独享路由守卫
                   beforeEnter(to,from,next){
                       const { isAuth } = to.meta;
                       if(isAuth){
                            //代表需要鉴权
                            if(localStorage.getItem('school') === 'wust1') next();//类似于nodejs中间件
                            else alert('无权限');
                        }else{
                            next();
                        }
                   }
               },
               {
                   name:'msg',
                   path: 'message',
                   component: Message,
                   children:[
                       {
                           name: 'particulars',
                           path: 'detail',
                           component: Detail,
                           //props的第一种写法值为对象,该对象的所有key-value都会以props的形式传给detail组件(死数据)
                           // props:{
                           //     a:1,
                           //     b:'hello'
                           // }
                           //props的第二种写法，值为布尔值,布尔值为真，就会把该路由组件收到的所有params(注意如果是query参数不会奏效的)参数以props的形式传递给detail组件
                           // props: true
                           //props的第三种写法,值为函数  $route.query.id
                           props({ query: { id, title } }){
                               return {
                                   id,
                                   title
                               }
                           }
                       }
                   ],
                   //meta:路由元信息，可以配置是否需要校验的信息
                   meta:{
                       isAuth: true,
                       title: '消息'
                   }
               }
           ]
       }
   ]
});

//全局前置路由守卫
//初始化和在每一次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//     // console.log(to, from);
//     console.log('前置路由守卫');
//     const { isAuth } = to.meta;
//     if(isAuth){
//         //代表需要鉴权
//         if(localStorage.getItem('school') === 'wust1') next();//类似于nodejs中间件
//         else alert('无权限');
//     }else{
//         next();
//     }
// });

//全局后置路由守卫
//初始化和在每一次路由切换之后被调用
router.afterEach(( to, from ) => {
    console.log('后置路由守卫', to, from);
    //点击每一个路由都切换西夏document.title
    const { title } = to.meta;
    document.title = title || 'vue-advance';
})


export default router;
