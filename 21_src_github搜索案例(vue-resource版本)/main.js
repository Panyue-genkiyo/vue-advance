//引入Vue
import Vue from "vue";
//引入vue-resource
import vueResource from 'vue-resource';
//引入App
import App from './App';

//关闭Vue的生产提示
Vue.config.productionTip = false;

Vue.use(vueResource); //使用vueResource插件来发送请求

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
});

