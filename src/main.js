import Vue from 'vue' //这里引入的是残缺版的vue,是没有模版解析器是不能写template的 vue.runtime.esm.js
import App from './App.vue'
// import Vue from 'vue/dist/vue';

Vue.config.productionTip = false;

/*
	关于不同版本的Vue：

		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/

new Vue({
  // template: `<App></App>`,
  // components: { App },
  // render: h => h(App),
  el:'#app',
  render: h => h(App),
  //vue 传递帮你调render函数并传递了一个名为createElement的函数,这里的第一个参数代表h1元素，第二个参数是h1的内容
  // render:(createElement) => createElement('h1',"迟缓")
  // el:'#app',
  // template: '<h1>你好</h1>'
}).$mount('#app')
