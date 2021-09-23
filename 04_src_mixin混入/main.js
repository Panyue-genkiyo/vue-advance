//引入Vue
import Vue from "vue";
//引入App
import App from './App';

// import { mixin, shareData } from "@/mixin";

//关闭Vue的生产提示
Vue.config.productionTip = false;
//全局混合
// Vue.mixin(mixin);
// Vue.mixin(shareData);

new Vue({
    el:'#app',
    render: h => h(App)
});
