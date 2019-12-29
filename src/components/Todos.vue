<template>
  <div>
    <h3>Todos</h3>
    <div class="todo" v-for="todo in allTodos" :key="todo.id">{{todo.title}}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods:{
    
  },
  computed: mapGetters(["allTodos"])
};
</script>

<style scoped>
</style>