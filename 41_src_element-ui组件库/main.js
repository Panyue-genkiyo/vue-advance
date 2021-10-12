//引入Vue
import Vue from "vue";
//引入App
import App from './App';
//完整引入
//引入element-ui组件库
// import ElementUI from 'element-ui';
//引入element全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//使用element ui插件库
// Vue.use(ElementUI);

//按需引入
import { Button, Input, Row, DatePicker } from 'element-ui';
Vue.use(Button);
Vue.use(Input);
Vue.use(Row);
Vue.use(DatePicker);



//关闭Vue的生产提示
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App),
});



