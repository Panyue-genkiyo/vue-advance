//引入Vue
import Vue from "vue";
//引入App
import App from './App';

//引入插件
import plugins from './plugins';

//关闭Vue的生产提示
Vue.config.productionTip = false;

Vue.use(plugins); //vue应用插件

new Vue({
    el:'#app',
    render: h => h(App)
});


