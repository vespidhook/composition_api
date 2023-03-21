<template>
  <h1>Composition API</h1>
  {{ todoId }} <br>
  <input
    v-model="todoId"
    type="text"
  />

</template>

<script>
import { ref, watch, watchEffect } from 'vue'

  export default {
    setup() {
      const todoId = ref(1);

      // watch(todoId, (vl) => {
      //   console.log('todo', vl);
      // })

      watchEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
          .then(response => response.json())
          .then(json => console.log(json))
      })

      return {
        todoId
      }
    }
  }
</script>