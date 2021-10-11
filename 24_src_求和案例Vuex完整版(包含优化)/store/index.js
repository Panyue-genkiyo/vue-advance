/**
 * 该文件用于创建vuex中最核心的store
 */

//引入Vuex
import Vuex from 'vuex';
import Vue from "vue";

//使用vuex来集中管理状态,必要
//new store的前提是必须要使用Vuex插件
Vue.use(Vuex);

//创建actions(本质就是对象) 用于响应组件中的动作
const actions = {
    //收到上下文对象(包含commit)和dispatch过来的值
    // increment(context, value){
    //     context.commit('INCREMENT', value);
    // },
    // decrement(context, value){
    //     context.commit('DECREMENT', value);
    // },
    incrementIfOdd(context, value){
        // console.log(`action中的incrementIfOdd被调用`);
        // console.log('处理了一些事情');
        // context.dispatch('demo1', value);
        if(context.state.sum % 2) {
            console.log('@')
            context.commit('INCREMENT',value);
            // context.state.sum += 1;//这样可以实现但是记住本次对状态的改变开发者工具将无法捕获，因为开发者工具是对mutations对话的
        }
    },
    incrementWait(context, value){
        setTimeout(() => {
            context.commit('INCREMENT', value);
        },500)
    },
    // demo1(context, value){
    //     console.log('处理了一些事情---demo1');
    //     context.dispatch('demo2', value);
    // },
    // demo2(context, value){
    //     console.log('在action的demo中完成最终的逻辑');
    //     if(context.state.sum % 2) {
    //         console.log('@')
    //         context.commit('INCREMENT',value);
    //     }
    // }
}

//创建mutations(本质也是对象) 用于修改数据(state)
const mutations = {
    //收到state和要操作数value
    INCREMENT(state, value) {
        state.sum += value;
    },
    DECREMENT(state, value) {
        state.sum -= value;
    },
}

//准备getters用于加工state，将其共享于各个组件当中
const getters = {
    bigSum(state){
        return state.sum * 10;
    }
}

//准备state(数据) 存储数据
//类似于各个组件里的computed(计算属性),只不过它是共享的
const state = {
    sum: 0,
    school: 'Wust',
    subject: 'Computer Science',
}


//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});







