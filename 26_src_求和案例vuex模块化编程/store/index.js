/**
 * 该文件用于创建vuex中最核心的store
 */

//引入Vuex
import Vuex from 'vuex';
import Vue from "vue";
import count from './count';
import person from './person';

//使用vuex来集中管理状态,必要
//new store的前提是必须要使用Vuex插件
Vue.use(Vuex);


//创建并暴露store
export default new Vuex.Store({
    modules:{
        count,
        person
    }
});







