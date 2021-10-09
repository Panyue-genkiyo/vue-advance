//引入Vue
import Vue from "vue";
//引入App
import App from './App';

//关闭Vue的生产提示
Vue.config.productionTip = false;


//创建一个vc
// const Demo = Vue.extend({}); //demo 傀儡不需要配置对象
//
// const d = new Demo(); //此时这个d就是组件实例对象 => vc

// Vue.prototype.x = d;

new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate() {
        //此时这个this就是vm，只不过这个时候还并没有去解析模版
        Vue.prototype.$bus = this; //安装全局事件总线
    }
});


