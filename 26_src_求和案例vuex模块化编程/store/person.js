//人员列表配置
import axios from "axios";
import {nanoid} from "nanoid";
export default {
    namespaced: true,
    state:{
        personList: [
            { id: '001', name: '张三'}
        ],
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name;
        }
    },
    actions:{
        addPersonWang(context, value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value);
            }else{
                alert('添加的人员必须姓王');
            }
        },
        //联系后端api
        addPersonServer(context){
            axios.get(`https://api.uixsj.cn/hitokoto/get?type=social`)
                .then(res => context.commit('ADD_PERSON',{
                    id: nanoid(),
                    name: res.data
                }))
                .catch(e => alert(e.message));
        }
    },
    mutations:{
        ADD_PERSON(state, value){
            state.personList.unshift(value);
        }
    }
}
