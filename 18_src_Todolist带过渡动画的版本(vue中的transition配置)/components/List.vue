<template>
  <ul class="todo-main">
    <!--appear代表一开始就会出现动画默认为 :appear='true'-->
    <transition-group name="todo" appear>
      <Item
          v-for="todoObj in todos"
          :key="todoObj.id"
          :todo="todoObj"
      />
    </transition-group>
  </ul>
</template>

<script>
import Item from "@/components/Item";

export default {
  name: "List",
  components: {
    Item,
  },
  props:['todos']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

.todo-enter-active{
  animation: anim linear 0.5s;
}

.todo-leave-active{
  animation: anim  linear 0.5s reverse;
}
@keyframes anim {
  from {
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>
